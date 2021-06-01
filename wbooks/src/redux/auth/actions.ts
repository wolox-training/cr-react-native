import { login } from '@services/AuthService';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';

const completedActions = completeTypes({ primaryActions: ['LOGIN', 'SET_CURRENT_USER'] });

export const actions = createTypes(completedActions, '@@AUTH');

const target = { responseAPI: 'responseAPI', currentUser: 'currentUser' };

const actionCreators = {
  login: (email: string, password: string) => ({
    type: actions.LOGIN,
    target: target.responseAPI,
    service: login,
    payload: { email, password },
    injections: [
      withPostSuccess(async (dispatch: any, response: any) => {
        try {
          const jsonValue = JSON.stringify(response.data);
          await AsyncStorage.setItem('authData', jsonValue);
        } catch (e) {
          if (__DEV__) Reactotron.log('Error storage');
        }
      })
    ]
  }),
  setCurrentUser: (user: string) => ({
    type: actions.SET_CURRENT_USER,
    target: target.currentUser,
    payload: user
  })
};

export default actionCreators;
