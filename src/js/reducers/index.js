import { combineReducers } from 'redux';
import CommonReducer from '../store/common/commonReducer';
import SensorsReducer from '../store/sensors/sensorsReducer';
import DashboardReducer from '../store/dashboard/dashboardReducer';
const rootReducer = combineReducers({
  common: CommonReducer,
  DashboardReducer,
  SensorsReducer,
});
export default rootReducer;
