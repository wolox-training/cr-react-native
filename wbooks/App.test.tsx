/**
 * @format
 */

import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import { Provider } from 'react-redux';

import App from './src/app';

const middlewares = [thunk];
const mockStore = configureMockStore(middlewares);

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

describe('async actions', () => {
  const store = mockStore();

  it('renders correctly', () => {
    renderer.create(
      <Provider store={store}>
        <App />
      </Provider>
    );
  });
});
