import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS } from '@constants/colors';

interface Styles {
  container: ViewStyle;
  formContainer: ViewStyle;
  formTitle: TextStyle;
  formInput: ViewStyle;
  loginBtn: ViewStyle;
  textLoginBtn: TextStyle;
  errorMessage: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 35
  },
  formContainer: {
    marginTop: 25
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7
  },
  formInput: {
    backgroundColor: COLORS.white,
    borderRadius: 10
  },
  loginBtn: {
    backgroundColor: COLORS.transparent,
    borderWidth: 4,
    borderColor: COLORS.white,
    alignItems: 'center',
    padding: 12,
    borderRadius: 30,
    marginTop: 60
  },
  textLoginBtn: {
    color: COLORS.white,
    fontSize: 18
  },
  errorMessage: {
    alignSelf: 'flex-end',
    marginRight: 20,
    color: COLORS.error
  }
});
