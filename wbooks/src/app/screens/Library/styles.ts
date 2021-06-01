import { StyleSheet, ViewStyle, Platform } from 'react-native';
import { COLORS } from '@constants/colors';

interface Styles {
  container: ViewStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    backgroundColor: COLORS.lightBlue,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 30 : 20
  }
});
