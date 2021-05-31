import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import actionCreators from '@redux/auth/actions';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import Form from '@screens/Login/components/Form';
import bcInicio from '@assets/General/bc_inicio.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import { validateEmail, validatePassword } from '@utils/validations';

import styles from './styles';

interface DataForm {
  email: string;
  password: string;
}

const Login = () => {
  const { control, handleSubmit, errors } = useForm();
  const dispatch = useDispatch();

  useEffect(() => {
    const getUser = async () => {
      try {
        const authData = await AsyncStorage.getItem('authData');
        return authData === null
          ? null
          : dispatch(actionCreators.setCurrentUser(JSON.parse(authData).currentUser));
      } catch (e) {
        if (__DEV__) Reactotron.log(e);
        return e;
      }
    };

    getUser();
  });

  const onSubmit = ({ email, password }: DataForm) => dispatch(actionCreators.login(email, password));

  return (
    <ImageBackground source={bcInicio} style={styles.container}>
      <Controller
        name="email"
        control={control}
        render={({ onChange, value }) => <Form title="Email" value={value} onChange={onChange} />}
        rules={{
          required: { value: true, message: 'Campo requerido' },
          validate: validateEmail
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
          validate: validatePassword
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
