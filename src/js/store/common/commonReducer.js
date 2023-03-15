import {
  SET_OVERLAY,
  SET_LOGGED_IN_USER,
  MANAGE_DIALOG,
  MANAGE_TOAST,
  SET_COMPONENT_OVERLAY,
  REFRESH_PAGE_DATA,
} from '../../actions/actionTypes';

const getInitialState = () => ({
  overlayStatus: false,
  componentOverlayStatus: false,
  userDetails: null,
  toast: {
    title: '',
    message: '',
    status: false,
    type: '',
  },
  dialog: {
    title: '',
    message: '',
    status: false,
    type: '',
  },
  refreshPageData: true,
});

export default function CommonReducer(state = getInitialState(), action) {
  switch (action.type) {
    case SET_OVERLAY:
      return Object.assign({}, state, {
        overlayStatus: action.payload,
      });
    case SET_COMPONENT_OVERLAY:
      return Object.assign({}, state, {
        componentOverlayStatus: action.payload,
      });
    case SET_LOGGED_IN_USER:
      return Object.assign({}, state, {
        userDetails: action.payload,
      });
    case MANAGE_TOAST:
      return Object.assign({}, state, {
        toast: action.payload,
      });
    case MANAGE_DIALOG:
      return Object.assign({}, state, {
        dialog: action.payload,
      });
    case REFRESH_PAGE_DATA:
      return Object.assign({}, state, {
        refreshPageData: action.payload,
      });
    default:
      return state;
  }
}
