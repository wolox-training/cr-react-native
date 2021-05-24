import React from 'react';
import { View, ImageBackground, Text, TextInput, TouchableOpacity } from 'react-native';
import bcInicio from '@assets/General/bc_inicio.png';

import styles from './styles';

const Login = () => {
  return (
    <ImageBackground source={bcInicio} style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Nombre</Text>
        <TextInput style={styles.formInput} autoCapitalize="words" />
      </View>
      <View style={styles.formContainer}>
        <Text style={styles.formTitle}>Contraseña</Text>
        <TextInput style={styles.formInput} autoCapitalize="words" />
      </View>
      <TouchableOpacity style={styles.loginBtn}>
        <Text style={styles.textLoginBtn}>Ingresar</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
