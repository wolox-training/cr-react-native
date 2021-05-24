import React from 'react';
import { View, Image, Text } from 'react-native';
import icSearch from '@assets/General/ic_search_placeholder.png';
import { TEXTS } from '@constants/texts';

import styles from './styles';

const SearchFilter = () => {
  return (
    <View style={styles.container}>
      <Image source={icSearch} />
      <Text style={styles.title}>{TEXTS.title}</Text>
      <Text style={styles.subTitle}>{TEXTS.subTitle}</Text>
    </View>
  );
};

export default SearchFilter;
