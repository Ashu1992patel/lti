import { createStore } from 'redux';
import { counterReducer } from './reducers/registerReducer';

// Create the Redux store with our reducer function and initial state
export const store = createStore(counterReducer);
