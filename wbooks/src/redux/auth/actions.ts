import authService from '@services/AuthService';
import { createTypes, completeTypes, withPostSuccess } from 'redux-recompose';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';

const completedActions = completeTypes({ primaryActions: ['LOGIN', 'SET_CURRENT_USER'] });

export const actions = createTypes(completedActions, '@@AUTH');

export const targets = { responseAPI: 'responseAPI', currentUser: 'currentUser' };

const actionCreators = {
  login: (email: string, password: string) => ({
    type: actions.LOGIN,
    target: targets.responseAPI,
    service: authService.login,
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
  setCurrentUser: (user: string | null) => ({
    type: actions.SET_CURRENT_USER,
    target: targets.currentUser,
    payload: user
  })
};

export default actionCreators;
