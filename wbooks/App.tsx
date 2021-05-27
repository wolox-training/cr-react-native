import 'react-native-gesture-handler';

if (__DEV__) {
  import('./src/config/reactotronConfig').then(() => console!.log('Reactotron Configured'));
}
import Reactotron from 'reactotron-react-native';
import React from 'react';
import Config from 'react-native-config';
import { Provider } from 'react-redux';

import store from './src/redux/store';
import App from './src/app';

export default function index() {
  const sv = Config.SECRET_VARIABLE;
  Reactotron.log(sv);

  return (
    <Provider store={store}>
      <App />
    </Provider>
  );
}
