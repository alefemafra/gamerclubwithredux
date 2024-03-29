import { alertConstants } from '../Constants';

export function alert(state = {}, action) {
  switch (action.type) {
    case alertConstants.SUCCESS:
      return {
        type: 'alert-success',
        message: action.message
      };
    case alertConstants.ERROR:
      return {
        type: 'alert-erro',
        message: action.message
      };
    case alertConstants.CLEAR:
      return {};
    default:
      return state
  }
}