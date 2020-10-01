import { combineReducers } from 'redux';

import sidebarReducer from 'redux/reducers/sidebarReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer
});

export default rootReducer;
