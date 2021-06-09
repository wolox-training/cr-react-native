import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';

interface Styles {
  linearGradient: ViewStyle;
  btnText: TextStyle;
}

export default StyleSheet.create<Styles>({
  linearGradient: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 30,
    width: '90%'
  },
  btnText: {
    fontWeight: 'bold',
    color: COLORS.white
  }
});
