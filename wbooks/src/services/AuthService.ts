import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';

interface Props {
  email: string;
  password?: string;
}

export const login = ({ email }: Props) =>
  new Promise(resolve => {
    setTimeout(() => {
      resolve({
        ok: true,
        data: {
          headers: { uid: email, token: 'AE12OI45PK56LK', client: 'secret_variable' },
          currentUser: email
        },
        problem: ''
      });
    }, 5000);
  });

export const getCurrentUser = async () => {
  try {
    const authData = await AsyncStorage.getItem('authData');
    return authData === null ? null : JSON.parse(authData).currentUser;
  } catch (e) {
    if (__DEV__) Reactotron.log(e);
    return null;
  }
};
