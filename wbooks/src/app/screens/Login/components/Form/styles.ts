import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS } from '@constants/colors';

interface Styles {
  formContainer: ViewStyle;
  formTitle: TextStyle;
  formInput: ViewStyle;
}

export default StyleSheet.create<Styles>({
  formContainer: {
    marginBottom: 30
  },
  formTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 7
  },
  formInput: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    height: 45
  }
});
