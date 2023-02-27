import {
  SET_OVERLAY,
  SET_LOGGED_IN_USER,
  MANAGE_DIALOG,
  MANAGE_TOAST,
  SET_COMPONENT_OVERLAY,
} from '../../actions/actionTypes';
import * as utils from '../../axiosUtils/appUtils';

export const setOverlayStatus = (data) => {
  return {
    type: SET_OVERLAY,
    payload: data,
  };
};

export const setComponentOverlay = (data) => {
  return {
    type: SET_COMPONENT_OVERLAY,
    payload: data,
  };
};

export const setLoggedInUser = (data) => {
  return {
    type: SET_LOGGED_IN_USER,
    payload: data,
  };
};

export const manageToast = (data) => {
  return {
    type: MANAGE_TOAST,
    payload: data,
  };
};

export const manageDialog = (data) => {
  return {
    type: MANAGE_DIALOG,
    payload: data,
  };
};
