import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

import styles from './styles';

interface Props {
  solid?: boolean;
  text: string;
  onPressBtn?: () => void;
}

const Information = ({ solid = true, text, onPressBtn }: Props) => {
  return (
    <TouchableOpacity style={solid ? styles.btnSolid : styles.btnHollow} onPress={onPressBtn}>
      <Text style={solid ? styles.btnTextSolid : styles.btnTextHollow}>{text}</Text>
    </TouchableOpacity>
  );
};

export default Information;
