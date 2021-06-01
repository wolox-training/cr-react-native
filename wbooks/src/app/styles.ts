import { StyleSheet, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.primary
  }
});
