import { callMain } from '@criptext/electron-better-ipc/renderer';
import { myAccount } from './electronInterface';
let accountId = '';

/*  Windows call
----------------------------- */
export const changeAccountApp = async params => {
  return await callMain('change-account-app', params);
};

export const closeMailboxWindow = () => {
  callMain('close-mailbox');
};

export const installUpdate = () => {
  callMain('install-update');
};

export const logoutApp = () => {
  callMain('logout-app');
};

export const maximizeMailboxWindow = () => {
  callMain('maximize-mailbox');
};

export const minimizeMailboxWindow = () => {
  callMain('minimize-mailbox');
};

export const openEmptyComposerWindow = () => {
  callMain('open-empty-composer');
};

export const openFilledComposerWindow = data => {
  callMain('open-filled-composer', data);
};

export const openFileExplorer = filename => {
  callMain('open-file-explorer', filename);
};

export const openLoginWindow = params => {
  callMain('open-login', params);
};

export const processPendingEvents = () => {
  setTimeout(() => {
    callMain('process-pending-events');
  }, 1000);
};

export const showNotificationApp = ({ switchToAccount, title, message, threadId }) => {
  callMain('show-notification', { switchToAccount, title, message, threadId });
};

export const throwError = error => {
  callMain('throwError', error);
};

export const updateDockBadgeApp = value => {
  callMain('update-dock-badge', value);
};

export const sendStartSyncDeviceEvent = data => {
  callMain('start-sync-mailbox-event', data);
};

export const sendStartLinkDevicesEvent = data => {
  callMain('start-link-devices-event', data);
};

export const sendPrintEmailEvent = emailId => {
  checkCurrentAccount();
  callMain('print-to-pdf', { emailId, accountId });
};

export const sendPrintThreadEvent = threadId => {
  checkCurrentAccount();
  callMain('print-to-pdf', { threadId, accountId });
};

export const getOsAndArch = () => callMain('get-os-and-arch');

export const sendOpenEmailSource = key => {
  checkCurrentAccount();
  callMain('open-email-source', { key, accountId });
};

export const checkForUpdates = showDialog => {
  callMain('check-for-updates', showDialog);
};

export const generateLabelUUID = async () => {
  return await callMain('generate-label-uuid');
};

export const restartSocket = async jwt => {
  await callMain('restart-socket', jwt);
};

export const startSocket = async jwt => {
  await callMain('start-socket', jwt);
};

/* File System
----------------------------- */
export const saveEmailBody = async params => {
  return await callMain('fs-save-email-body', params);
};

export const deleteEmailContent = async params => {
  return await callMain('fs-delete-email-content', params);
};

export const downloadFileInFileSystem = async ({
  url,
  filename,
  downloadType,
  metadataKey,
  filesize
}) => {
  return await callMain('fs-download-file', {
    url,
    filename,
    downloadType,
    metadataKey,
    filesize
  });
};

export const checkFileDownloaded = async ({ filename, metadataKey, type }) => {
  return await callMain('fs-check-file-downloaded', {
    filename,
    metadataKey,
    type
  });
};

/* Criptext Client
----------------------------- */
export const acknowledgeEvents = async eventIds => {
  return await callMain('client-acknowledge-events', eventIds);
};

export const changePassword = async params => {
  return await callMain('client-change-password', params);
};

export const changeRecoveryEmail = async params => {
  return await callMain('client-change-recovery-email', params);
};

export const checkExpiredSession = async params => {
  return await callMain('client-check-expired-session', params);
};

export const deleteMyAccount = async password => {
  return await callMain('client-delete-my-account', password);
};

export const getDataReady = async () => {
  return await callMain('client-get-data-ready');
};

export const getUserSettings = async () => {
  return await callMain('client-get-user-settings');
};

export const insertPreKeys = async preKeys => {
  return await callMain('client-insert-prekeys', preKeys);
};

export const logout = async () => {
  return await callMain('client-logout');
};

export const postPeerEvent = async params => {
  checkCurrentAccount();
  return await callMain('client-post-peer-event', { accountId, ...params });
};

export const removeAvatar = async params => {
  return await callMain('client-remove-avatar', params);
};

export const removeDevice = async params => {
  return await callMain('client-remove-device', params);
};

export const resendConfirmationEmail = async () => {
  return await callMain('client-resend-confirmation-email');
};

export const resetPassword = async recipientId => {
  return await callMain('client-reset-password', recipientId);
};

export const setReadTracking = async enabled => {
  return await callMain('client-set-read-tracking', enabled);
};

export const setReplyTo = async params => {
  return await callMain('client-set-reply-to', params);
};

export const setTwoFactorAuth = async enable => {
  return await callMain('client-set-two-factor-auth', enable);
};

export const syncBegin = async () => {
  return await callMain('client-sync-begin');
};

export const syncStatus = async () => {
  return await callMain('client-sync-status');
};

export const unlockDevice = async params => {
  return await callMain('client-unlock-device', params);
};

export const unsendEmailEvent = async metadataKey => {
  return await callMain('client-unsend-email', metadataKey);
};

export const updateDeviceType = async newDeviceType => {
  return await callMain('client-update-device-type', newDeviceType);
};

export const updateNameEvent = async params => {
  return await callMain('client-update-name-event', params);
};

export const updatePushToken = async pushToken => {
  return await callMain('client-update-push-token', pushToken);
};

export const uploadAvatar = async params => {
  return await callMain('client-upload-avatar', params);
};

/*  DataBase
----------------------------- */

const checkCurrentAccount = () => {
  if (!accountId || accountId !== myAccount.id) {
    accountId = myAccount.id;
  }
};

export const cleanDatabase = async () => {
  return await callMain('db-clean-database');
};

export const cleanDataLogout = async ({ recipientId, deleteAll }) => {
  return await callMain('db-clean-data-logout', { recipientId, deleteAll });
};

export const createEmail = async params => {
  return await callMain('db-create-email', params);
};

export const createEmailLabel = async params => {
  return await callMain('db-create-email-label', params);
};

export const createFeedItem = async params => {
  return await callMain('db-create-feed-item', params);
};

export const createIdentityKeyRecord = async params => {
  checkCurrentAccount();
  return await callMain('db-create-identity-key-record', {
    accountId: params.accountId || accountId,
    ...params
  });
};

export const createLabel = async params => {
  checkCurrentAccount();
  return await callMain('db-create-label', { params, accountId });
};

export const createPreKeyRecord = async params => {
  checkCurrentAccount();
  return await callMain('db-create-prekey-record', { accountId: params.accountId || accountId, ...params });
};

export const createSessionRecord = async params => {
  checkCurrentAccount();
  return await callMain('db-create-session-record', { accountId: params.accountId || accountId, ...params });
};

export const createSignalTables = async () => {
  return await callMain('db-create-signal-tables');
};

export const createSignedPreKeyRecord = async params => {
  checkCurrentAccount();
  return await callMain('db-create-signed-prekey-record', {
    accountId: params.accountId || accountId,
    ...params
  });
};

export const deleteEmailByKeys = async keys => {
  checkCurrentAccount();
  return await callMain('db-delete-email-by-keys', { keys, accountId });
};

export const deleteEmailLabel = async params => {
  return await callMain('db-delete-email-label', params);
};

export const deleteEmailsByIds = async ids => {
  return await callMain('db-delete-emails-by-ids', ids);
};

export const deleteEmailsByThreadIdAndLabelId = async ({
  threadIds,
  labelId
}) => {
  checkCurrentAccount();
  return await callMain('db-delete-emails-by-threadid-and-labelid', {
    threadIds,
    labelId,
    accountId
  });
};

export const deleteFeedItemById = async feedItemId => {
  return await callMain('db-delete-feed-item-by-id', feedItemId);
};

export const deleteLabelById = async labelId => {
  return await callMain('db-delete-label-by-id', labelId);
};

export const deletePreKeyPair = async params => {
  checkCurrentAccount();
  return await callMain('db-delete-prekey-pair', { accountId: params.accountId || accountId, ...params });
};

export const deleteSessionRecord = async params => {
  checkCurrentAccount();
  return await callMain('db-delete-session-record', { accountId: params.accountId || accountId, ...params });
};

export const getAccount = async () => {
  return await callMain('db-get-account');
};

export const getAccountByParams = async params => {
  return await callMain('db-get-account-by-params', params);
};

export const getAllFeedItems = async () => {
  return await callMain('db-get-all-feed-items');
};

export const getAllLabels = async () => {
  checkCurrentAccount();
  return await callMain('db-get-all-labels', accountId);
};

export const getContactByEmails = async emails => {
  checkCurrentAccount();
  return await callMain('db-get-contact-by-emails', { emails, accountId });
};

export const getContactByIds = async ids => {
  return await callMain('db-get-contact-by-ids', ids);
};

export const getEmailByKey = async key => {
  checkCurrentAccount();
  return await callMain('db-get-email-by-key', { key, accountId });
};

export const getEmailByParams = async params => {
  return await callMain('db-get-email-by-params', params);
};

export const getEmailLabelsByEmailId = async emailId => {
  return await callMain('db-get-email-labels-by-emailid', emailId);
};

export const getEmailsByIds = async emailIds => {
  return await callMain('db-get-emails-by-ids', emailIds);
};

export const getEmailsByKeys = async emailKeys => {
  checkCurrentAccount();
  return await callMain('db-get-emails-by-keys', {
    keys: emailKeys,
    accountId: accountId
  });
};

export const getEmailsByLabelIds = async labelIds => {
  checkCurrentAccount();
  return await callMain('db-get-emails-by-labelids', { labelIds, accountId });
};

export const getEmailsByThreadId = async threadId => {
  checkCurrentAccount();
  return await callMain('db-get-emails-by-threadid', { threadId, accountId });
};

export const getEmailsByThreadIdAndLabelId = async ({ threadIds, labelId }) => {
  checkCurrentAccount();
  return await callMain('db-get-emails-by-threadid-and-labelid', {
    threadIds,
    labelId,
    accountId
  });
};

export const getEmailsCounterByLabelId = async labelId => {
  checkCurrentAccount();
  return await callMain('db-get-emails-counter-by-labelid', {
    labelId,
    accountId
  });
};

export const getEmailsGroupByThreadByParams = async params => {
  checkCurrentAccount();
  return await callMain('db-get-emails-group-by-thread-by-params', {
    accountId,
    ...params
  });
};

export const getEmailsUnredByLabelId = async params => {
  let data;
  if (params.accountId) {
    data = params;
  } else {
    checkCurrentAccount();
    data = {
      accountId,
      ...params
    };
  }
  return await callMain('db-get-emails-unread-by-labelid', data);
};

export const getFilesByTokens = async tokens => {
  return await callMain('db-get-files-by-tokens', tokens);
};

export const getIdentityKeyRecord = async params => {
  checkCurrentAccount();
  return await callMain('db-get-identity-key-record', { accountId, ...params });
};

export const getLabelById = async id => {
  return await callMain('db-get-labelid', id);
};

export const getLabelsByParams = async ({ textArray }) => {
  checkCurrentAccount();
  return await callMain('db-get-labels-by-params', { textArray, accountId });
};

export const getPreKeyPair = async params => {
  checkCurrentAccount();
  return await callMain('db-get-prekey-pair', { accountId: params.accountId || accountId, ...params });
};

export const getSessionRecord = async params => {
  checkCurrentAccount();
  return await callMain('db-get-session-record', { accountId: params.accountId || accountId, ...params });
};

export const getSessionRecordIds = async myAccountId => {
  checkCurrentAccount();
  return await callMain('db-get-prekeys-ids', myAccount || accountId);
};

export const getSignedPreKey = async params => {
  checkCurrentAccount();
  return await callMain('db-get-signed-prekey', { accountId: params.accountId || accountId, ...params });
};

export const getTrashExpiredEmails = async () => {
  return await callMain('db-get-trash-expired-emails');
};

export const updateAccount = async params => {
  return await callMain('db-update-account', params);
};

export const updateContactByEmail = async ({ email, name }) => {
  return await callMain('db-update-contact-by-email', { email, name });
};

export const unsendEmail = async params => {
  checkCurrentAccount();
  return await callMain('db-unsend-email', { accountId, ...params });
};

export const updateEmail = async params => {
  checkCurrentAccount();
  return await callMain('db-update-email', { accountId, ...params });
};

export const updateEmails = async params => {
  checkCurrentAccount();
  return await callMain('db-update-emails', { accountId, ...params });
};

export const updateFeedItem = async ({ feedItemId, seen }) => {
  return await callMain('db-update-feed-item', { feedItemId, seen });
};

export const updateFilesByEmailId = async ({ emailId, status }) => {
  return await callMain('db-update-files-by-emailid', { emailId, status });
};

export const updateIdentityKeyRecord = async params => {
  checkCurrentAccount();
  return await callMain('db-update-identity-key-record', {
    accountId: params.accountId || accountId,
    ...params
  });
};

export const updateLabel = async params => {
  return await callMain('db-update-label', params);
};

export const updateSettings = async ({ opened, language, theme }) => {
  return await callMain('db-update-settings', { opened, language, theme });
};

export const updateUnreadEmailByThreadIds = async ({ threadIds, unread }) => {
  checkCurrentAccount();
  return await callMain('db-update-unread-email-by-threadids', {
    threadIds,
    unread,
    accountId
  });
};

/* DataTransfer
----------------------------- */
export const downloadBackupFile = async address => {
  return await callMain('data-transfer-download', address);
};

export const decryptBackupFile = async key => {
  return await callMain('data-transfer-decrypt', key);
};

export const importDatabase = async ({ accountId, resetAccountData }) => {
  return await callMain('data-transfer-import-database', {
    accountId,
    resetAccountData
  });
};

export const clearSyncData = async () => {
  return await callMain('data-transfer-clear-sync-data');
};
