import { GLOBAL_REFRESH } from '../../actions/actionTypes';

export const globalRefreshed = (data) => {
  return {
    type: GLOBAL_REFRESH,
    payload: data,
  };
};
