import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface Props {
  solid?: boolean;
  text: string;
}

const Information = ({ solid = true, text }: Props) => {
  return (
    <TouchableOpacity style={solid ? styles.btnSolid : styles.btnHollow}>
      <Text style={solid ? styles.btnTextSolid : styles.btnTextHollow}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Information;
