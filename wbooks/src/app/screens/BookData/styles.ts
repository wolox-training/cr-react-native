import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';

interface Styles {
  container: ViewStyle;
  bookCard: ViewStyle;
  dataContainer: ViewStyle;
  imageBook: ImageStyle;
  title: TextStyle;
  author: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    marginTop: 35
  },
  bookCard: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 30,
    marginBottom: 10,
    marginHorizontal: 15
  },
  dataContainer: {
    flexDirection: 'row',
    justifyContent: 'flex-start'
  },
  imageBook: {
    height: 80,
    width: 60,
    resizeMode: 'stretch',
    marginRight: 20
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    width: 200
  },
  author: {
    fontSize: 16
  }
});
