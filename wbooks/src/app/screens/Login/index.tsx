import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useNavigation } from '@react-navigation/native';
import { useDispatch } from 'react-redux';
import actionCreators from '@redux/auth/actions';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import Form from '@screens/Login/components/Form';
import bcInicio from '@assets/General/bc_inicio.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';

import styles from './styles';

interface DataForm {
  email: string;
  password: string;
}

const Login = () => {
  const { control, handleSubmit, errors } = useForm();
  const navigation = useNavigation();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const authData = await AsyncStorage.getItem('authData');
        Reactotron.log(authData === null ? null : JSON.parse(authData));
      } catch (e) {
        if (__DEV__) Reactotron.log(e);
      }
    };

    getUser();
  }, []);

  const onSubmit = (data: DataForm) => {
    dispatch(actionCreators.login(data.email, data.password));
    navigation.navigate('Library');
  };

  return (
    <ImageBackground source={bcInicio} style={styles.container}>
      <Controller
        name="email"
        control={control}
        render={({ onChange, value }) => <Form title="Email" value={value} onChange={onChange} />}
        rules={{
          required: { value: true, message: 'Campo requerido' },
          validate: value =>
            value.match(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ||
            'El email no es valido'
        }}
        defaultValue=""
      />
      {errors.email && <Text style={styles.errorMessage}>{errors.email.message}</Text>}

      <Controller
        name="password"
        control={control}
        render={({ onChange, value }) => (
          <Form title="Password" value={value} onChange={onChange} isSecure={true} />
        )}
        rules={{
          required: { value: true, message: 'Campo requerido' },
          validate: value => value.length >= 8 || 'La contraseña debe tener 8 o más caracteres'
        }}
        defaultValue=""
      />
      {errors.password && <Text style={styles.errorMessage}>{errors.password.message}</Text>}

      <TouchableOpacity style={styles.loginBtn} onPress={handleSubmit(onSubmit)}>
        <Text style={styles.textLoginBtn}>Submit</Text>
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
