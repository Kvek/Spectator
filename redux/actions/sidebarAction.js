import { bindActionCreators } from 'redux';
import { store } from 'redux/store';

export const toggleBookmarkSidebar = (payload) => ({
  type: 'TOGGLE_BOOKMARK_SIDEBAR',
  payload
});

export const sidebarAction = bindActionCreators(
  {
    toggleBookmarkSidebar
  },
  store.dispatch
);
