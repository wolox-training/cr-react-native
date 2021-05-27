import { ImageSourcePropType } from 'react-native';

export default interface Comment {
  id: number;
  author: string;
  text: string;
  url?: null;
  authorImage: ImageSourcePropType;
}
