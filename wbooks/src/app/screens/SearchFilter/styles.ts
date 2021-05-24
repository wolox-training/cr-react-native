import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
// import { COLORS } from '@constants/colors';

interface Styles {
  container: ViewStyle;
  title: TextStyle;
  subTitle: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
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
