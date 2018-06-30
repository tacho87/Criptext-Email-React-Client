import { addContacts, addContact } from './contacts';
import { addFiles, loadFiles } from './files';
import {
  addEmailToThread,
  addMoveThreadsLabel,
  addThreads,
  addThreadLabel,
  addThreadsLabel,
  filterThreadsByUnread,
  loadEvents,
  loadThreads,
  moveThreads,
  selectThread,
  removeThread,
  removeThreadLabel,
  deselectThreads,
  updateUnreadThread,
  updateUnreadThreads,
  searchThreads,
  selectThreads,
  removeThreads,
  removeThreadsLabel,
  sendOpenEvent,
  updateStatusThread
} from './threads';
import {
  addEmails,
  loadEmails,
  markEmailUnread,
  muteEmail,
  muteNotifications,
  updateUnreadEmails
} from './emails';
import {
  addLabels,
  addLabel,
  loadLabels,
  updateLabel,
  updateLabelSuccess
} from './labels';
import {
  addFeedItems,
  loadFeedItems,
  removeFeedItem,
  removeFeedItemSuccess,
  selectFeedItem,
  updateAllFeedItemsAsOlder,
  updateFeedItemSuccess
} from './feeditems';
import { setThreads, loadSuggestions } from './suggestions';

export {
  addContact,
  addContacts,
  addEmails,
  addEmailToThread,
  addFiles,
  addFeedItems,
  addLabel,
  addLabels,
  addMoveThreadsLabel,
  addThreads,
  addThreadLabel,
  addThreadsLabel,
  deselectThreads,
  filterThreadsByUnread,
  loadEmails,
  loadEvents,
  loadFiles,
  loadFeedItems,
  loadLabels,
  loadSuggestions,
  loadThreads,
  markEmailUnread,
  moveThreads,
  muteEmail,
  muteNotifications,
  removeThread,
  removeThreadLabel,
  removeFeedItem,
  removeFeedItemSuccess,
  removeThreads,
  removeThreadsLabel,
  selectFeedItem,
  selectThread,
  selectThreads,
  searchThreads,
  sendOpenEvent,
  setThreads,
  updateAllFeedItemsAsOlder,
  updateFeedItemSuccess,
  updateLabel,
  updateLabelSuccess,
  updateStatusThread,
  updateUnreadEmails,
  updateUnreadThread,
  updateUnreadThreads
};
