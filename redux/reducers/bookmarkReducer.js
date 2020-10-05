import { loadState } from 'utility';

const persistedState = loadState();

const bookmarkData = {
  bookmarks: persistedState?.bookmark?.bookmarks ?? []
};

const bookmarkReducer = (state = bookmarkData, action) => {
  switch (action.type) {
    case 'SET_BOOKMARK_DATA':
      return { ...state, bookmarks: action.payload };
    default:
      return state;
  }
};

export default bookmarkReducer;
