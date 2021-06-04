import { COLORS } from '@constants/colors';
import { StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  centeredView: ViewStyle;
  modalView: ViewStyle;
  message: TextStyle;
}

export default StyleSheet.create<Styles>({
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.primary30
  },
  modalView: {
    backgroundColor: COLORS.white,
    borderRadius: 20,
    padding: 20,
    width: '95%'
  },
  message: {
    alignSelf: 'center',
    fontSize: 18,
    fontWeight: 'bold'
  }
});
