import React from 'react';
import { View, Text, TextInput } from 'react-native';

import styles from './styles';

interface Props {
  title: string;
  value: any;
  onChange: (text: string) => void;
  isSecure?: boolean;
}

const Form = ({ title, value, onChange, isSecure = false }: Props) => {
  return (
    <View style={styles.formContainer}>
      <Text style={styles.formTitle}>{title}</Text>
      <TextInput
        style={styles.formInput}
        onChangeText={text => onChange(text)}
        value={value}
        maxLength={25}
        secureTextEntry={isSecure}
        autoCapitalize="none"
      />
    </View>
  );
};

export default Form;
