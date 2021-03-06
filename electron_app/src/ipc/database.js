const { ipcMain: ipc } = require('@criptext/electron-better-ipc');
const dbManager = require('../database');
const myAccount = require('../Account');

ipc.answerRenderer('db-clean-data-logout', params =>
  dbManager.cleanDataLogout(params)
);

ipc.answerRenderer('db-create-alias', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.createAlias(data);
});

ipc.answerRenderer('db-create-contact', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.createContact(data);
});

ipc.answerRenderer('db-create-update-contact', params => {
  return dbManager.createOrUpdateContact(params);
});

ipc.answerRenderer('db-create-custom-domain', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.createCustomDomain(data);
});

ipc.answerRenderer('db-change-contact-blocked', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.updateContactEmailBlocked(data);
});

ipc.answerRenderer('db-change-account-blocked', params => {
  const data = params.id ? params : { ...params, id: myAccount.id };
  return dbManager.updateAccount(data);
});

ipc.answerRenderer('db-create-email-label', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.createEmailLabel(data);
});

ipc.answerRenderer('db-create-feed-item', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.createFeedItem(data);
});

ipc.answerRenderer('db-create-identity-key-record', params =>
  dbManager.createIdentityKeyRecord(params)
);

ipc.answerRenderer('db-create-label', params => {
  const data = !Array.isArray(params)
    ? params.accountId
      ? params
      : { ...params, accountId: myAccount.id }
    : params.map(
        label =>
          label.accountId ? label : { ...label, accountId: myAccount.id }
      );
  return dbManager.createLabel(data);
});

ipc.answerRenderer('db-create-prekey-record', params =>
  dbManager.createPreKeyRecord(params)
);

ipc.answerRenderer('db-create-session-record', params =>
  dbManager.createSessionRecord(params)
);

ipc.answerRenderer('db-create-settings', params =>
  dbManager.createSettings(params)
);

ipc.answerRenderer('db-get-settings', () => dbManager.getSettings());

ipc.answerRenderer('db-create-signed-prekey-record', params =>
  dbManager.createSignedPreKeyRecord(params)
);

ipc.answerRenderer('db-create-tables', () => dbManager.createTables());

ipc.answerRenderer('db-delete-alias', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.deleteAliases(data);
});

ipc.answerRenderer('db-delete-aliases-by-domain', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.deleteAliasesByDomain(data);
});

ipc.answerRenderer('db-delete-custom-domains', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.deleteCustomDomains(data);
});

ipc.answerRenderer('db-delete-custom-domains-by-name', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.deleteCustomDomainByName(data);
});

ipc.answerRenderer('db-delete-email-label', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.deleteEmailLabel(data);
});

ipc.answerRenderer('db-delete-feed-item-by-id', feedItemId =>
  dbManager.deleteFeedItemById(feedItemId)
);

ipc.answerRenderer('db-delete-label-by-id', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.deleteLabelById(data);
});

ipc.answerRenderer('db-delete-prekey-pair', params =>
  dbManager.deletePreKeyPair(params)
);

ipc.answerRenderer('db-delete-session-record', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.deleteSessionRecord(data);
});

ipc.answerRenderer('db-get-account', () => dbManager.getAccount());

ipc.answerRenderer('db-get-account-by-params', params =>
  dbManager.getAccountByParams(params)
);

ipc.answerRenderer('db-get-all-contacts', () => dbManager.getAllContacts());

ipc.answerRenderer('db-get-all-feed-items', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getAllFeedItems(data);
});

ipc.answerRenderer('db-get-all-labels', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getAllLabels(data);
});

ipc.answerRenderer('db-get-alias-by-params', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getAliasByParams(data);
});

ipc.answerRenderer('db-get-contact-by-emails', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getContactByEmails(data);
});

ipc.answerRenderer('db-get-contact-by-emailid', emailId =>
  dbManager.getContactsByEmailId(emailId)
);

ipc.answerRenderer('db-get-contact-by-ids', ids =>
  dbManager.getContactByIds(ids)
);

ipc.answerRenderer('db-get-custom-domains-by-params', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getCustomDomainByParams(data);
});

ipc.answerRenderer('db-get-email-by-key', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getEmailByKey(data);
});

ipc.answerRenderer('db-get-email-by-params', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getEmailByParams(data);
});

ipc.answerRenderer('db-get-emails-by-array-param', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getEmailsByArrayParam(data);
});

ipc.answerRenderer('db-get-emails-by-labelids', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getEmailsByLabelIds(data);
});

ipc.answerRenderer('db-get-emails-by-threadid-and-labelid', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getEmailsByThreadIdAndLabelId(data);
});

ipc.answerRenderer('db-get-emails-counter-by-labelid', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getEmailsCounterByLabelId(data);
});

ipc.answerRenderer('db-get-emails-group-by-thread-by-params', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getEmailsGroupByThreadByParams(data);
});

ipc.answerRenderer('db-get-email-labels-by-emailid', emailId =>
  dbManager.getEmailLabelsByEmailId(emailId)
);

ipc.answerRenderer('db-get-emails-unread-by-labelid', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getEmailsUnredByLabelId(data);
});

ipc.answerRenderer('db-get-feeditems-counter-by-seen', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getFeedItemsCounterBySeen(data);
});

ipc.answerRenderer('db-get-files-by-emailid', emailId =>
  dbManager.getFilesByEmailId(emailId)
);

ipc.answerRenderer('db-get-files-by-tokens', tokens =>
  dbManager.getFilesByTokens(tokens)
);

ipc.answerRenderer('db-get-identity-key-record', params =>
  dbManager.getIdentityKeyRecord(params)
);

ipc.answerRenderer('db-get-labelid', id => dbManager.getLabelById(id));

ipc.answerRenderer('db-get-labesls-by-text', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getLabelsByText(data);
});

ipc.answerRenderer('db-get-label-by-uuid', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getLabelByUuid(data);
});

ipc.answerRenderer('db-get-prekey-pair', params =>
  dbManager.getPreKeyPair(params)
);

ipc.answerRenderer('db-get-prekeys-ids', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getPreKeyRecordIds(data);
});

ipc.answerRenderer('db-get-session-record', params =>
  dbManager.getSessionRecord(params)
);

ipc.answerRenderer('db-get-session-record-by-recipientids', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getSessionRecordByRecipientIds(data);
});

ipc.answerRenderer('db-get-session-record-rows-by-recipientids', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.getSessionRecordRowsByRecipientIds(data);
});

ipc.answerRenderer('db-get-signed-prekey', params =>
  dbManager.getSignedPreKey(params)
);

ipc.answerRenderer('db-get-trash-expired-emails', () =>
  dbManager.getTrashExpiredEmails(myAccount.id)
);

ipc.answerRenderer('db-update-account', params => {
  const data =
    params.recipientId || params.id ? params : { ...params, id: myAccount.id };
  return dbManager.updateAccount(data);
});

ipc.answerRenderer('db-update-account-default-address', params => {
  const data = params.id ? params : { ...params, id: myAccount.id };
  return dbManager.updateAccountDefaultAddressId(data);
});

ipc.answerRenderer('db-update-alias', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.updateAlias(data);
});

ipc.answerRenderer('db-update-contact-by-email', ({ email, name }) =>
  dbManager.updateContactByEmail({ email, name })
);

ipc.answerRenderer('db-update-contact-spam-acore', params =>
  dbManager.updateContactSpamScore(params)
);

ipc.answerRenderer('db-update-custom-domains', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.updateCustomDomain(data);
});

ipc.answerRenderer('db-update-email', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.updateEmail(data);
});

ipc.answerRenderer('db-update-emails', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.updateEmails(data);
});

ipc.answerRenderer('db-update-feed-items', params =>
  dbManager.updateFeedItems(params)
);

ipc.answerRenderer('db-update-files-by-emailid', ({ emailId, status }) =>
  dbManager.updateFilesByEmailId({ emailId, status })
);

ipc.answerRenderer('db-update-identity-key-record', params =>
  dbManager.updateIdentityKeyRecord(params)
);

ipc.answerRenderer('db-update-label', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.updateLabel(data);
});

ipc.answerRenderer('db-update-settings', params =>
  dbManager.updateSettings(params)
);

ipc.answerRenderer('db-update-unread-email-by-threadids', params => {
  const data = params.accountId
    ? params
    : { ...params, accountId: myAccount.id };
  return dbManager.updateUnreadEmailByThreadIds(data);
});
