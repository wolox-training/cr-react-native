import React from 'react';
import { Image, ImageSourcePropType } from 'react-native';

import styles from './styles';

interface Props {
  icon: ImageSourcePropType;
  right?: boolean;
}

const IconHeader = ({ icon, right = true }: Props) => (
  <Image source={icon} style={right ? styles.containerRight : styles.containerLeft} />
);

export default IconHeader;
