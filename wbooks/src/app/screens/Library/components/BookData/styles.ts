import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';
import { FONTS } from '@constants/fonts';

interface Styles {
  bookCard: ViewStyle;
  dataContainer: ViewStyle;
  textContainer: ViewStyle;
  imageBook: ImageStyle;
  title: TextStyle;
  author: TextStyle;
}

const { size } = FONTS;

export default StyleSheet.create<Styles>({
  bookCard: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 30,
    marginVertical: 5
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textContainer: {
    flex: 1
  },
  imageBook: {
    height: 80,
    width: 60,
    resizeMode: 'stretch',
    marginRight: 20
  },
  title: {
    fontSize: size.large,
    fontWeight: 'bold'
  },
  author: {
    fontSize: size.normal
  }
});
