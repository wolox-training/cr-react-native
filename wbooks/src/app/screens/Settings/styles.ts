import { COLORS } from '@constants/colors';
import { ImageStyle, StyleSheet, TextStyle, ViewStyle } from 'react-native';

interface Styles {
  container: ViewStyle;
  profile: ViewStyle;
  title: TextStyle;
  imageProfile: ImageStyle;
  user: TextStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    flex: 1,
    backgroundColor: COLORS.lightBlue
  },
  profile: {
    flex: 1,
    marginTop: 20,
    borderRadius: 20,
    padding: 20,
    margin: 15,
    backgroundColor: COLORS.white,
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 22
  },
  imageProfile: {
    height: 100,
    width: 100
  },
  user: {
    fontWeight: 'bold',
    fontSize: 18
  }
});
