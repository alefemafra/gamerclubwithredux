import { Constants } from '../Constants';
import { userService } from '../Services';
import { alertActions } from '../Actions';

export const Actions = {
    getAllInformation
};

function getAllInformation() {
    return dispatch => {
        dispatch(request());

        userService.getAllInformation()
            .then(
                data => {
                    dispatch(success(data));
                },
                error => {
                    dispatch(failure(error.toString()));
                    dispatch(alertActions.error(error.toString()));
                }
            );
    };

    function request() { return { type: Constants.NORMAL_REQUEST } }
    function success(data) { return { type: Constants.NORMAL_SUCCESS, data } }
    function failure(error) { return { type: Constants.NORMAL_FAILURE, error } }
}