import React from 'react';
import { Image, ImageSourcePropType, TouchableOpacity } from 'react-native';

import styles from './styles';

interface Props {
  icon: ImageSourcePropType;
  right?: boolean;
  onPressIcon?: () => void;
}

const IconHeader = ({ icon, right = true, onPressIcon }: Props) => (
  <TouchableOpacity onPress={onPressIcon}>
    <Image source={icon} style={right ? styles.containerRight : styles.containerLeft} />
  </TouchableOpacity>
);

export default IconHeader;
