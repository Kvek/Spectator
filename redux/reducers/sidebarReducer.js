const sidebar = { showSidebar: false, showBookmarkSidebar: false };

const sidebarReducer = (state = sidebar, action) => {
  switch (action.type) {
    case 'TOGGLE_SIDEBAR':
      return { ...state, showSidebar: action.payload };
    case 'TOGGLE_BOOKMARK_SIDEBAR':
      return { ...state, showBookmarkSidebar: action.payload };
    default:
      return state;
  }
};

export default sidebarReducer;
