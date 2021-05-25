import { ImageStyle, StyleSheet, Dimensions, Platform, ViewStyle } from 'react-native';
import { COLORS } from '@constants/colors';

const { width } = Dimensions.get('window');

interface Styles {
  backgroundContainer: ImageStyle;
  imageStyle: ImageStyle;
  container: ViewStyle;
  input: ViewStyle;
  icon: ImageStyle;
  btnRight: ViewStyle;
}

export default StyleSheet.create<Styles>({
  backgroundContainer: {
    width,
    height: Platform.OS === 'ios' ? '115%' : 70,
    paddingHorizontal: 20,
    paddingVertical: 7
  },
  imageStyle: {
    resizeMode: 'stretch'
  },
  container: {
    backgroundColor: COLORS.white,
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 20
  },
  input: {
    flex: 1,
    height: 40,
    fontSize: 14,
    margin: 3
  },
  icon: {
    height: 20,
    marginLeft: 12,
    width: 20
  },
  btnRight: {
    backgroundColor: COLORS.lightBlue,
    width: 20,
    height: 20,
    alignItems: 'center',
    marginRight: 12,
    borderRadius: 20
  }
});
