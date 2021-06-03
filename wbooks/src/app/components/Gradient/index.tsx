import React from 'react';
import { Text } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { COLORS } from '@constants/colors';

import styles from './styles';

interface Props {
  text: string;
}

const Gradient = ({ text }: Props) => {
  return (
    <LinearGradient
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      colors={[COLORS.primary, COLORS.secondary]}
      style={styles.linearGradient}>
      <Text style={styles.btnText}>{text}</Text>
    </LinearGradient>
  );
};

export default Gradient;
