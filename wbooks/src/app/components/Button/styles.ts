import { StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';

interface DefaultStyles {
  btn: ViewStyle;
  btnText: TextStyle;
}

const defaultStyles: DefaultStyles = {
  btn: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 30,
    width: '90%'
  },
  btnText: {
    fontWeight: 'bold'
  }
};

interface Styles {
  btnSolid: ViewStyle;
  btnTextSolid: TextStyle;
  btnHollow: ViewStyle;
  btnTextHollow: TextStyle;
}

export default StyleSheet.create<Styles>({
  btnSolid: {
    ...defaultStyles.btn,
    backgroundColor: COLORS.primary
  },
  btnTextSolid: {
    ...defaultStyles.btnText,
    color: COLORS.white
  },
  btnHollow: {
    ...defaultStyles.btn,
    borderWidth: 2,
    borderColor: COLORS.primary
  },
  btnTextHollow: {
    ...defaultStyles.btnText,
    color: COLORS.primary
  }
});
