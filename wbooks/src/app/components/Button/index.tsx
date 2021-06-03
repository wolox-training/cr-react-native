import React from 'react';
import { View, Text } from 'react-native';

import styles from './styles';

interface Props {
  solid?: boolean;
  text: string;
}

const Button = ({ solid = true, text }: Props) => {
  return (
    <View style={solid ? styles.btnSolid : styles.btnHollow}>
      <Text style={solid ? styles.btnTextSolid : styles.btnTextHollow}>{text}</Text>
    </View>
  );
};

export default Button;
