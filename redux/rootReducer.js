import { combineReducers } from 'redux';

import sidebarReducer from 'redux/reducers/sidebarReducer';
import headlineReducer from 'redux/reducers/headlineReducer';
import sourceReducer from 'redux/reducers/sourceReducer';
import bookmarkReducer from 'redux/reducers/bookmarkReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  source: sourceReducer,
  news: headlineReducer,
  bookmark: bookmarkReducer
});

export default rootReducer;
