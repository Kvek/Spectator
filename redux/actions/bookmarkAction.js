import { bindActionCreators } from 'redux';
import { store } from 'redux/store';

export const updateBookmark = (payload) => ({
  type: 'SET_BOOKMARK_DATA',
  payload
});

export const bookmarkAction = bindActionCreators(
  {
    updateBookmark
  },
  store.dispatch
);
