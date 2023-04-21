import { createSelector } from 'reselect';

const DashboardReducerSelector = (state) => state.DashboardReducer;

export const getOverallParkingDetails = createSelector(
  [DashboardReducerSelector],
  (DashboardReducer) => {
    return DashboardReducer?.overallParkingDetails;
  }
);
