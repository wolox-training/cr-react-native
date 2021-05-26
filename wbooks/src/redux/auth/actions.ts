import { login } from '@services/AuthService';
import { createTypes, completeTypes } from 'redux-recompose';

const completedActions = completeTypes({ primaryActions: ['LOGIN'] });

export const actions = createTypes(completedActions, '@@AUTH');

const actionCreators = {
  login: (email: string, password: string) => ({
    type: actions.LOGIN,
    target: 'user',
    service: login,
    payload: { email, password }
  })
};

export default actionCreators;
