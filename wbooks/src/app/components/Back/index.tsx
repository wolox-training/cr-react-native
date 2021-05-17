import React from 'react';
import { TouchableOpacity, Image } from 'react-native';
import icBack from '@assets/NavigationBar/ic_back.png';

import styles from './styles';

interface Props {
  goLibrary: () => void;
}

const Back = ({ goLibrary }: Props) => (
  <TouchableOpacity onPress={goLibrary}>
    <Image source={icBack} style={styles.container} />
  </TouchableOpacity>
);

export default Back;
