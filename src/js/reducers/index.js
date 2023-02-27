import { combineReducers } from 'redux';
import CommonReducer from '../store/common/commonReducer';
const rootReducer = combineReducers({
  common: CommonReducer,
});
export default rootReducer;
