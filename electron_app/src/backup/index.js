const { fork } = require('child_process');
const path = require('path');
const { app } = require('electron');
const logger = require('../logger');
const { databasePath } = require('../database/DBEmodel');
const { getUserEmailsPath } = require('../utils/FileUtils');
const { APP_DOMAIN } = require('../utils/const');

const exporterPath = require.resolve('./exporter.js');

const getTempDirectory = nodeEnv => {
  const folderName = 'BackupTempData';
  const currentDirToReplace =
    process.platform === 'win32' ? '\\src\\backup' : '/src/backup';
  switch (nodeEnv) {
    case 'development': {
      return path.join(__dirname, `../../${folderName}`);
    }
    default: {
      const userDataPath = app.getPath('userData');
      return path
        .join(userDataPath, folderName)
        .replace('/app.asar', '')
        .replace(currentDirToReplace, '');
    }
  }
};

const getBackupAuditPath = node_env => {
  switch (node_env) {
    case 'development': {
      const auditPath = path
        .join(__dirname, '/../userData', 'backup-audit.json')
        .replace('/src', '');
      return auditPath;
    }
    default: {
      const { app } = require('electron');
      const userDataPath = app.getPath('userData');
      const auditPath = path.join(
        userDataPath,
        'userData',
        'backup-audit.json'
      );
      return auditPath;
    }
  }
};

const runBackup = (
  { dbPath, outputPath, key, recipientId, password, isAutoBackup },
  progressCallback
) => {
  const email = recipientId.includes('@')
    ? recipientId
    : `${recipientId}@${APP_DOMAIN}`;
  const tempDir = getTempDirectory();
  logger.info(
    `Starting Backup Process : ${exporterPath} - ${tempDir} - ${dbPath} - ${outputPath}`
  );
  return new Promise((resolve, reject) => {
    let backupSize = 0;
    const worker = fork(
      exporterPath,
      [dbPath, outputPath, recipientId, tempDir],
      {
        env: {
          NODE_ENV: 'script',
          DBPATH: databasePath,
          FSPATH: getUserEmailsPath(process.env.NODE_ENV, email),
          AUDITPATH: getBackupAuditPath(process.env.NODE_ENV),
          AUTOBACKUP: isAutoBackup
        },
        stdio: ['inherit', 'inherit', 'inherit', 'ipc']
      }
    );

    worker.on('message', data => {
      logger.info(`Backup Message : ${JSON.stringify(data)}`);
      if (data.step === 'progress') progressCallback(data);
      if (data.step === 'end') backupSize = data.backupSize;
    });

    worker.on('error', code => {
      logger.error(`child process exited with error ${code}`);
      reject(code);
    });

    worker.on('close', code => {
      logger.info(`child process closed with code ${code}`);
      if (code !== 0 || backupSize === 0) {
        reject(code);
        return;
      }
      resolve(backupSize);
    });

    worker.send({
      step: 'init',
      key,
      password
    });
  });
};

module.exports = {
  runBackup
};
