import { combineReducers } from 'redux';
import CommonReducer from '../store/common/commonReducer';
import DashboardReducer from '../store/dashboard/dashboardReducer';
const rootReducer = combineReducers({
  common: CommonReducer,
  DashboardReducer,
});
export default rootReducer;
