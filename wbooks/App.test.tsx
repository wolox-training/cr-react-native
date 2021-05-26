/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';

import App from './src/app';

const reactotron = {
  configure: () => reactotron,
  use: () => reactotron,
  useReactNative: () => reactotron,
  connect: () => reactotron,
  createEnhancer: () => reactotron,
  setAsyncStorageHandler: () => reactotron
};

jest.mock('reactotron-react-native', () => reactotron);
// Note: test renderer must be required after react-native.

it('renders correctly', () => {
  renderer.create(<App />);
});
