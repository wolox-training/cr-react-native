import { createStore } from 'redux';
import Reactotron from '@config/reactotronConfig';
import bookReducer from '@redux/book/reducer';

export default createStore(bookReducer, Reactotron.createEnhancer());
