import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import { fetchMiddleware } from 'redux-recompose';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';

import bookReducer from './book/reducer';

const rootReducer = combineReducers({
  book: bookReducer
});

export default createStore(
  rootReducer,
  compose(applyMiddleware(thunk, fetchMiddleware), Reactotron.createEnhancer())
);
