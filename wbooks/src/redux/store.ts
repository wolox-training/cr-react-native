import { createStore, applyMiddleware, compose, combineReducers as CR } from 'redux';
import { fetchMiddleware, wrapCombineReducers } from 'redux-recompose';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';
import bookReducer from '@redux/book/reducer';
import authReducer from '@redux/auth/reducer';

const combineReducers = wrapCombineReducers(CR);

const rootReducer = combineReducers({
  book: bookReducer,
  auth: authReducer
});

export default createStore(
  rootReducer,
  compose(applyMiddleware(thunk, fetchMiddleware), Reactotron.createEnhancer())
);
