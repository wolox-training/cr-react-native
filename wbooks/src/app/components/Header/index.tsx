import React from 'react';
import { Image } from 'react-native';
import background from '@assets/General/bc_nav_bar.png';

import styles from './styles';

const HeaderBackgroundImage = () => <Image source={background} style={styles.container} />;

export default HeaderBackgroundImage;
