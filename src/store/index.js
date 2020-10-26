import { createStore, combineReducers } from 'redux';
import saveState from '../reducers';

const rootReducer = combineReducers({ saveState });

const store = createStore(rootReducer);

export default store;
