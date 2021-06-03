import { createReducer, completeReducer, completeState } from 'redux-recompose';

import { actions } from './actions';

export const initialState = completeState({ description: { responseAPI: {}, currentUser: null } });

const reducerDescription = {
  primaryActions: [actions.LOGIN],
  override: {
    [actions.SET_CURRENT_USER]: (state: any, action: { payload: string | null }) => ({
      ...state,
      currentUser: action.payload
    })
  }
};

const completedReducer = completeReducer(reducerDescription);

export default createReducer(initialState, completedReducer);
