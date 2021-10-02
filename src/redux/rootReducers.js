import { combineReducers } from 'redux';
import home from './home/reducers';
const reducers = combineReducers({
  home,
});
const rootReducers = (state, action) => {
  return reducers(state, action);
};
export default rootReducers;