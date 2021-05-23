import 'react-native-gesture-handler';

if (__DEV__) {
  import('./src/config/reactotronConfig').then(() => console!.log('Reactotron Configured'));
}
import Reactotron from 'reactotron-react-native';
import React from 'react';
import Config from 'react-native-config';

import App from './src/app';

export default function index() {
  const qwe = Config.SECRET_VARIABLE;
  Reactotron.log(qwe, 'sa');

  return <App />;
}
