import 'react-native-gesture-handler';

if (__DEV__) {
  import('./src/config/reactotronConfig').then(() => console!.log('Reactotron Configured'));
}
import Reactotron from 'reactotron-react-native';
import React from 'react';

import App from './src/app';

export default function index() {
  Reactotron.log('hello rendering world');

  return <App />;
}
