import { combineReducers } from 'redux';

import { data } from './data.reducer';
import { alert } from './alert.reducer';

const rootReducer = combineReducers({
  data,
  alert
});

export default rootReducer;