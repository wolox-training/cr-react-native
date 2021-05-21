import { ImageStyle, StyleSheet } from 'react-native';
import { DIMENSIONS } from '@constants/dimensions';

const { height, width } = DIMENSIONS;

interface Styles {
  containerLeft: ImageStyle;
  containerRight: ImageStyle;
}

export default StyleSheet.create<Styles>({
  containerLeft: {
    marginLeft: 20,
    height,
    width
  },
  containerRight: {
    marginRight: 20,
    height,
    width
  }
});
