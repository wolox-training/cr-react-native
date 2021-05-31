import React, { useEffect } from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '@redux/auth/actions';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import Form from '@screens/Login/components/Form';
import bcInicio from '@assets/General/bc_inicio.png';
import AsyncStorage from '@react-native-async-storage/async-storage';
import Reactotron from 'reactotron-react-native';
import witLoading from '@components/withLoading';

import styles from './styles';

const LoadingIndicator = witLoading(() => <Text style={styles.textLoginBtn}>Submit</Text>);

interface RootState {
  auth: { responseAPILoading: boolean };
}

interface DataForm {
  email: string;
  password: string;
}

const Login = () => {
  const { responseAPILoading } = useSelector((state: RootState) => state.auth);

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
  }, [dispatch]);

  const onSubmit = (data: DataForm) => dispatch(actionCreators.login(data.email, data.password));

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
        <LoadingIndicator isLoading={responseAPILoading} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
