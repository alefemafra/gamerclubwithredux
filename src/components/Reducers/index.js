import { combineReducers } from 'redux';

import { data } from './dataReducer';
import { alert } from './alertReducer';

const rootReducer = combineReducers({
  data,
  alert
});

export default rootReducer;