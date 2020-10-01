import { bindActionCreators } from 'redux';
import { store } from 'redux/store';

export const toggleSidebar = (payload) => ({
  type: 'TOGGLE_SIDEBAR',
  payload
});

export const toggleBookmarkSidebar = (payload) => ({
  type: 'TOGGLE_BOOKMARK_SIDEBAR',
  payload
});

export const sidebarAction = bindActionCreators(
  {
    toggleSidebar,
    toggleBookmarkSidebar
  },
  store.dispatch
);
