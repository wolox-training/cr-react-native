import { createStore, combineReducers } from 'redux';
import Reactotron from '@config/reactotronConfig';
import bookReducer from '@redux/book/reducer';

const rootReducer = combineReducers({
  books: bookReducer
});

export default createStore(rootReducer, Reactotron.createEnhancer());
