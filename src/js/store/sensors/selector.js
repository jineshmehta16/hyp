import { createSelector } from 'reselect';

const SensorsReducerSelector = (state) => state?.SensorsReducer;

export const getGlobalRefresh = createSelector(
  [SensorsReducerSelector],
  (SensorsReducer) => {
    return SensorsReducer?.globalRefresh;
  }
);
