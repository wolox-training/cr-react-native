import { StyleSheet, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';
import { SIZE } from '@constants/fonts';

const IMGSIZE = 17;

interface Styles {
  bookCard: ViewStyle;
  dataContainer: ViewStyle;
  textContainer: ViewStyle;
  detailImageBook: ImageStyle;
  title: TextStyle;
  subTitle: TextStyle;
  successBtn: ViewStyle;
  successImage: ImageStyle;
}

export default StyleSheet.create<Styles>({
  bookCard: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 30,
    marginTop: 12
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  textContainer: {
    flex: 1
  },
  detailImageBook: {
    height: 120,
    width: 90,
    resizeMode: 'stretch',
    marginRight: 20
  },
  title: {
    fontSize: SIZE.large,
    fontWeight: 'bold'
  },
  subTitle: {
    fontSize: SIZE.normal
  },
  successBtn: {
    marginTop: 20,
    alignSelf: 'center',
    backgroundColor: COLORS.green,
    alignItems: 'center',
    borderRadius: 20,
    padding: 5
  },
  successImage: {
    height: IMGSIZE,
    width: IMGSIZE,
    resizeMode: 'stretch'
  }
});
