import React from 'react';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import Form from '@screens/Login/components/Form';
import bcInicio from '@assets/General/bc_inicio.png';

import styles from './styles';

const Login = () => {
  return (
    <ImageBackground source={bcInicio} style={styles.container}>
      <Form title="Email" />
      <Form title="Password" isSecure={true} />
      <TouchableOpacity style={styles.loginBtn} onPress={() => console.log('submit')}>
        <Text style={styles.textLoginBtn}>Submit</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
