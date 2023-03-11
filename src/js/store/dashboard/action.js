import { SET_OVERALL_PARKING_DETAILS } from '../../actions/actionTypes';
import { get } from '../../axiosUtils/appUtils';
import { manageToast, setOverlayStatus } from '../common/actions';

export const setOverallParkingDetails = (data) => {
  return {
    type: SET_OVERALL_PARKING_DETAILS,
    payload: data,
  };
};

export const getOverallParkingInformation = () => {
  return (dispatch) => {
    dispatch(setOverlayStatus(true));
    return get('/db/dashboardData.json')
      .then((response) => {
        if (response.data.status.toUpperCase() === 'SUCCESS') {
          dispatch(setOverallParkingDetails(response.data.data));
        } else {
          const obj = {
            title: 'error',
            message: 'Unable to fetch dashboard data. Please check the URL.',
            status: true,
            type: 'error',
          };
          dispatch(manageToast(obj));
        }
        dispatch(setOverlayStatus(false));
      })
      .catch((error) => {
        const obj = {
          title: 'error',
          message: error.message,
          status: true,
          type: 'error',
        };
        dispatch(manageToast(obj));
        dispatch(setOverlayStatus(false));
      });
  };
};
