import { SET_OVERALL_PARKING_DETAILS } from '../../actions/actionTypes';

const getInitialState = () => ({
  overallParkingDetails: {
    occupied: 0,
    vacant: 100,
    currentUtilizationInPercentage: 0,
    parkingLevelOccupancy: [
      {
        level: '',
        occupied: 0,
        vacant: 100,
        currentUtilizationInPercentage: 0,
      },
    ],
  },
});

export default function dashboardReducer(state = getInitialState(), action) {
  switch (action.type) {
    case SET_OVERALL_PARKING_DETAILS:
      return Object.assign({}, state, {
        overallParkingDetails: action.payload,
      });
    default:
      return state;
  }
}
