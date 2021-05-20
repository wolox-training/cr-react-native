import { ImageStyle, StyleSheet } from 'react-native';

interface Styles {
  container: ImageStyle;
}

export default StyleSheet.create<Styles>({
  container: {
    marginRight: 20,
    height: 25,
    width: 25
  }
});
