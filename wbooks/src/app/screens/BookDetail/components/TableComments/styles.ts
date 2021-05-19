import { StyleSheet, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';
import { SIZE } from '@constants/fonts';

interface Styles {
  commentCard: ViewStyle;
  comment: ViewStyle;
  image: ImageStyle;
  textContainer: TextStyle;
  author: TextStyle;
  text: TextStyle;
}

export default StyleSheet.create<Styles>({
  commentCard: {
    backgroundColor: COLORS.white,
    padding: 20,
    borderTopRightRadius: 10,
    borderTopLeftRadius: 10,
    marginBottom: -10
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center'
  },
  image: {
    marginRight: 20
  },
  textContainer: {
    flex: 1
  },
  author: {
    fontSize: SIZE.normal,
    fontWeight: 'bold'
  },
  text: {
    fontSize: SIZE.small
  }
});
