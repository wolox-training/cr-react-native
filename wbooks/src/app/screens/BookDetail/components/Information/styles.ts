import { StyleSheet, ImageStyle, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';
import { SIZE } from '@constants/fonts';

interface Styles {
  bookCard: ViewStyle;
  dataContainer: ViewStyle;
  textContainer: ViewStyle;
  detailImageBook: ImageStyle;
  title: TextStyle;
  author: TextStyle;
  btnAdd: ViewStyle;
  btnAddText: TextStyle;
  btnRent: ViewStyle;
  btnRentText: TextStyle;
}

export default StyleSheet.create<Styles>({
  bookCard: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 30
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
  author: {
    fontSize: SIZE.normal
  },
  btnAdd: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 30,
    paddingVertical: 12,
    borderRadius: 30,
    width: '90%',
    borderColor: COLORS.primary,
    borderWidth: 2
  },
  btnAddText: {
    fontWeight: 'bold',
    color: COLORS.primary
  },
  btnRent: {
    alignSelf: 'center',
    alignItems: 'center',
    marginTop: 20,
    paddingVertical: 12,
    borderRadius: 30,
    width: '90%',
    backgroundColor: COLORS.primary
  },
  btnRentText: {
    fontWeight: 'bold',
    color: COLORS.white
  }
});
