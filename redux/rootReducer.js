import { combineReducers } from 'redux';

import sidebarReducer from 'redux/reducers/sidebarReducer';
import sourceReducer from './reducers/sourceReducer';

const rootReducer = combineReducers({
  sidebar: sidebarReducer,
  source: sourceReducer
});

export default rootReducer;
