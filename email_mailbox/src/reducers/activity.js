import { Activity } from '../actions/types';
import { Map } from 'immutable';

const initActivity = Map({
  avatarTimestamp: Date.now(),
  isFilteredByUnreadThreads: false,
  isLoadingThreads: true,
  isSyncing: true,
  switchThread: Map({
    checked: false,
    disabled: false
  })
});

const activity = (state = initActivity, action) => {
  switch (action.type) {
    case Activity.AVATAR_UPDATED_TIMESTAMP:
      return state.set('avatarTimestamp', action.timestamp);
    case Activity.UPDATE_SWITCH_THREADS: {
      const checked = action.checked;
      const disabled = action.disabled;
      if (typeof checked === 'boolean' || typeof disabled === 'boolean') {
        return state.set(
          'switchThread',
          switchThread(state.get('switchThread'), action)
        );
      }
      return state;
    }
    case Activity.UNREAD_FILTER:
      return state.update(
        'isFilteredByUnreadThreads',
        switchUnreadThreadsStatus => !switchUnreadThreadsStatus
      );
    case Activity.START_LOAD_SYNC:
      return state.set('isSyncing', true);
    case Activity.STOP_LOAD_SYNC:
      return state.set('isSyncing', false);
    case Activity.START_LOAD_THREAD:
      return state.set('isLoadingThreads', true);
    case Activity.STOP_LOAD_THREAD:
      return state.set('isLoadingThreads', false);
    case Activity.STOP_ALL: {
      return state.merge({
        isLoadingThreads: false,
        isSyncing: false
      });
    }
    default:
      return state;
  }
};

const switchThread = (state, action) => {
  switch (action.type) {
    case Activity.UPDATE_SWITCH_THREADS: {
      const checked = action.checked;
      const disabled = action.disabled;
      return state.merge({
        checked: typeof checked === 'boolean' ? checked : state.get('checked'),
        disabled:
          typeof disabled === 'boolean' ? disabled : state.get('disabled')
      });
    }
    default:
      return state;
  }
};

export default activity;
