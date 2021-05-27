import { ImageStyle, StyleSheet } from 'react-native';

const SIZE = 25;

interface Styles {
  containerLeft: ImageStyle;
  containerRight: ImageStyle;
}

export default StyleSheet.create<Styles>({
  containerLeft: {
    marginLeft: 20,
    height: SIZE,
    width: SIZE
  },
  containerRight: {
    marginRight: 20,
    height: SIZE,
    width: SIZE
  }
});
