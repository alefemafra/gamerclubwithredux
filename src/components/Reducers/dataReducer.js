import { Constants } from '../constants';

export function data(state = {}, action) {
  switch (action.type) {
    case Constants.NORMAL_REQUEST:
      return {
        loading: true
      };
    case Constants.NORMAL_SUCCESS:
      return {
        items: action.data
      };
    case Constants.NORMAL_FAILURE:
      return { 
        error: action.error
      };
    default:
      return state
  }
}