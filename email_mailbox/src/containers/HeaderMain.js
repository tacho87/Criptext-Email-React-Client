import { connect } from 'react-redux';
import { getAllLabels } from '../selectors/labels';
import {
  clearSuggestions,
  loadSuggestions,
  removeAllThreads
} from '../actions/index';
import HeaderMainWrapper from '../components/HeaderMainWrapper';
import { SectionType } from '../utils/const';
import { LabelType } from '../utils/electronInterface';
import { openLoginWindow } from '../utils/ipc';

const mapStateToProps = state => {
  const suggestions = state.get('suggestions');
  const allLabels = getAllLabels(state);
  const avatarTimestamp = state.get('activities').get('avatarTimestamp');
  const isLoadingThreads = state.get('activities').get('isLoadingThreads');
  return {
    avatarTimestamp,
    allLabels,
    hints: suggestions.get('hints'),
    isLoadingThreads,
    threads: suggestions.get('threads')
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClearSearchResults: () => {
      const searchLabelId = -2;
      dispatch(removeAllThreads(searchLabelId));
      dispatch(clearSuggestions());
    },
    onClickSection: () => {
      const type = SectionType.SETTINGS;
      ownProps.onClickSection(type);
    },
    onGoToDefaultInbox: () => {
      const type = SectionType.MAILBOX;
      const mailboxSelected = {
        id: 1,
        text: 'Inbox'
      };
      const params = {
        mailboxSelected
      };
      ownProps.onClickSection(type, params);
    },
    onSearchChange: filter => {
      dispatch(loadSuggestions(filter));
    },
    onSearchSelectThread: (threadId, searchParams) => {
      const type = SectionType.THREAD;
      const mailboxSelected = LabelType.search;
      const params = {
        mailboxSelected: {
          ...mailboxSelected,
          fromSuggestions: true
        },
        threadIdSelected: threadId,
        searchParams
      };
      ownProps.onClickSection(type, params);
    },
    onSearchThreads: searchParams => {
      const type = SectionType.MAILBOX;
      const mailboxSelected = LabelType.search;
      const params = {
        mailboxSelected,
        searchParams
      };
      ownProps.onClickSection(type, params);
    },
    openLogin: () => {
      openLoginWindow();
    },
    openSettings: () => {
      const type = SectionType.SETTINGS;
      ownProps.onClickSection(type);
    }
  };
};

const HeaderMain = connect(mapStateToProps, mapDispatchToProps)(
  HeaderMainWrapper
);

export default HeaderMain;
