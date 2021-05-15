import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    backgroundColor: COLORS.lightBlue,
    padding: 15
  }
});
