import {createStore, combineReducers} from 'redux';
import CountReducer from './reducers/countReducer';
import OnBoardReducer from './reducers/onBoardReducer';

const rootReducer = combineReducers({
  count: CountReducer,
  start: OnBoardReducer,
});

export const store = createStore(rootReducer);
