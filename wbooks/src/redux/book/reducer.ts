import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const initialState = completeState({ description: { books: [] } });

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS]
};

const completedReducer = completeReducer(reducerDescription);

export default createReducer(initialState, completedReducer);
