import React from 'react';
import { useForm, Controller } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '@redux/auth/actions';
import { ImageBackground, Text, TouchableOpacity } from 'react-native';
import Form from '@screens/Login/components/Form';
import bcInicio from '@assets/General/bc_inicio.png';
import witLoading from '@components/withLoading';
import { validateEmail, validatePassword } from '@utils/validations';

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
        <LoadingIndicator isLoading={responseAPILoading} />
      </TouchableOpacity>
    </ImageBackground>
  );
};

export default Login;
