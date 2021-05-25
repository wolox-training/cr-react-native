import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

const initialState = completeState({ description: { books: [], query: '' } });

const reducerDescription = {
  primaryActions: [actions.GET_BOOKS],
  override: {
    [actions.SET_QUERY]: (state: any, action: { payload: string }) => ({
      ...state,
      query: action.payload
    })
  }
};

const completedReducer = completeReducer(reducerDescription);

export default createReducer(initialState, completedReducer);
