import { createSelector } from 'reselect';

const CommonReducerSelector = (state) => state.common;

export const getToast = createSelector(
  [CommonReducerSelector],
  (CommonReducer) => {
    return CommonReducer.toast;
  }
);

export const getDialog = createSelector(
  [CommonReducerSelector],
  (CommonReducer) => {
    return CommonReducer.dialog;
  }
);

export const getProductServiceFullDisplayDialog = createSelector(
  [CommonReducerSelector],
  (CommonReducer) => {
    return CommonReducer.productServiceDialog;
  }
);

export const getOverlay = createSelector(
  [CommonReducerSelector],
  (CommonReducer) => {
    return CommonReducer.overlayStatus;
  }
);

export const getComponentOverlay = createSelector(
  [CommonReducerSelector],
  (CommonReducer) => {
    return CommonReducer.componentOverlayStatus;
  }
);

export const loggedInUser = createSelector(
  [CommonReducerSelector],
  (CommonReducer) => {
    return CommonReducer.userDetails;
  }
);