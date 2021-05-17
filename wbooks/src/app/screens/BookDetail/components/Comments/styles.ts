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
  viewAll: TextStyle;
}

export default StyleSheet.create<Styles>({
  commentCard: {
    marginTop: 10,
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 30
  },
  comment: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 20
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
  },
  viewAll: {
    fontSize: SIZE.normal,
    color: COLORS.primary,
    fontWeight: 'bold',
    alignSelf: 'center'
  }
});
