import { createStore, compose, applyMiddleware, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import bookReducer from './book/reducer';

const rootReducer = combineReducers({
  book: bookReducer
});

export default createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));
