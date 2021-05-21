import { StyleSheet, ViewStyle, TextStyle } from 'react-native';
import { COLORS } from '@constants/colors';
import { SIZE } from '@constants/fonts';

interface Styles {
  container: ViewStyle;
  header: ViewStyle;
  footer: ViewStyle;
  viewAll: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    backgroundColor: COLORS.lightBlue,
    paddingTop: 15,
    paddingHorizontal: 15
  },
  header: {
    marginBottom: 15
  },
  footer: {
    backgroundColor: COLORS.white,
    height: 50,
    marginTop: 10
  },
  viewAll: {
    fontSize: SIZE.normal,
    color: COLORS.primary,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
