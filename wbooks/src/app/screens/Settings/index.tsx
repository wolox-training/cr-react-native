import { COLORS } from '@constants/colors';
import React from 'react';
import { View, Text, StatusBar } from 'react-native';

import styles from './styles';

const Settings = () => (
  <View style={styles.container}>
    <StatusBar animated backgroundColor={COLORS.black30} />
    <Text>Settings!</Text>
  </View>
);

export default Settings;
