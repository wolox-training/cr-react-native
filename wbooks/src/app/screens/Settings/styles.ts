import { COLORS } from '@constants/colors';
import { ImageStyle, PixelRatio, StyleSheet, TextStyle, ViewStyle } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';

const SIZE = 30;

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
    fontSize: RFPercentage(3.5)
  },
  imageProfile: {
    height: PixelRatio.getPixelSizeForLayoutSize(SIZE),
    width: PixelRatio.getPixelSizeForLayoutSize(SIZE)
  },
  user: {
    fontWeight: 'bold',
    fontSize: RFPercentage(2.2)
  }
});
