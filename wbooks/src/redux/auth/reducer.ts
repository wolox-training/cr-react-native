import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const initialState = completeState({ description: { user: {} } });

const reducerDescription = {
  primaryActions: [actions.LOGIN]
};

const completedReducer = completeReducer(reducerDescription);

export default createReducer(initialState, completedReducer);
