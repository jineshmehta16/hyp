import { GLOBAL_REFRESH } from '../../actions/actionTypes';

const getInitialState = () => ({
  globalRefresh: true,
});

export default function sensorsReducer(state = getInitialState(), action) {
  switch (action.type) {
    case GLOBAL_REFRESH:
      return Object.assign({}, state, {
        globalRefresh: action.payload,
      });
    default:
      return state;
  }
}
