import {createStore, applyMiddleware, compose} from 'redux';
import rootReducer from './reducers/root-reducer';

const store = createStore(rootReducer);

export default store;