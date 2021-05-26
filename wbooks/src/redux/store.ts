import { createStore, applyMiddleware, compose, combineReducers } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';
import bookReducer from '@redux/book/reducer';

const rootReducer = combineReducers({
  book: bookReducer
});

export default createStore(rootReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));
