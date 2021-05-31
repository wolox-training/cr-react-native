import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  isSecure?: boolean;
}

const Form = ({ title, isSecure = false }: Props) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>{title}</Text>
      <TextInput style={styles.formInput} secureTextEntry={isSecure} />
    </View>
  );
};

export default Form;
