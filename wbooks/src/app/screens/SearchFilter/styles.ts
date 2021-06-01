import { StyleSheet, TextStyle, ViewStyle, Platform } from 'react-native';
import { COLORS } from '@constants/colors';

interface Styles {
  container: ViewStyle;
  listContainer: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  listContainer: {
    flex: 1,
    backgroundColor: COLORS.lightBlue,
    paddingHorizontal: 15,
    paddingTop: Platform.OS === 'ios' ? 70 : 20
  },
  title: {
    margin: 10,
    fontSize: 24,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: 16
  }
});
