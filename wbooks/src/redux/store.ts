import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import Reactotron from '@config/reactotronConfig';
import bookReducer from '@redux/book/reducer';

export default createStore(bookReducer, compose(applyMiddleware(thunk), Reactotron.createEnhancer()));
