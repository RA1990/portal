import {createStore} from 'redux';
import rootReducer from '../reducers/index';

export default createStore(rootReducer);


const makeStore = (initialState, options) => {
  return createStore(reducer, initialState);
};
