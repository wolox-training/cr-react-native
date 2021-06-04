import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

const Settings = () => (
  <View style={styles.container}>
    <StatusBar animated backgroundColor="rgba(0, 0, 0, 0.7)" />
    <Text>Settings!</Text>
  </View>
);

export default Settings;
