/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import { SafeAreaView, StatusBar } from 'react-native';
import AppNavigator from '@components/AppNavigator';

import styles from './styles';

const App = () => (
  <SafeAreaView style={styles.container}>
    <StatusBar animated barStyle="light-content" backgroundColor="black" />
    <AppNavigator />
  </SafeAreaView>
);

export default App;
