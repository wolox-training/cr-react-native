import { ImageStyle, StyleSheet, Dimensions, Platform } from 'react-native';
import { COLORS } from '@constants/colors';

const { width } = Dimensions.get('window');

interface Styles {
  container: ImageStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    resizeMode: 'stretch',
    width,
    height: Platform.OS === 'ios' ? 80 : 70,
    backgroundColor: COLORS.lightBlue
  }
});
