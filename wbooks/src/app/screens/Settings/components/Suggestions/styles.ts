import { COLORS } from '@constants/colors';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  title: TextStyle;
  containerCarousel: ViewStyle;
  touchable: ViewStyle;
  containerBackground: ViewStyle;
  image: ImageStyle;
  containerBookTitle: ViewStyle;
}

export default StyleSheet.create<Styles>({
  title: {
    fontWeight: 'bold',
    fontSize: 22,
    alignSelf: 'center',
    color: COLORS.primary
  },
  containerCarousel: {
    flex: 2,
    flexDirection: 'row',
    justifyContent: 'center'
  },
  touchable: {
    flex: 1
  },
  containerBackground: {
    flex: 1,
    margin: 15,
    justifyContent: 'flex-end'
  },
  image: {
    resizeMode: 'stretch',
    borderRadius: 5
  },
  containerBookTitle: {
    backgroundColor: COLORS.white,
    padding: 10,
    margin: 10,
    borderRadius: 5,
    alignItems: 'center'
  }
});
