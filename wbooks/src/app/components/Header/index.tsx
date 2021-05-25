import React, { useState } from 'react';
import { View, ImageBackground, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import background from '@assets/General/bc_nav_bar.png';
import icSearch from '@assets/General/ic_search_placeholder.png';

import styles from './styles';

interface Props {
  routeName?: any;
}

const HeaderBackground = ({ routeName }: Props) => {
  const [query, setQuery] = useState('');

  const onChangeQuery = (text: string) => {
    setQuery(text);
  };

  if (routeName === 'SearchFilter')
    return (
      <ImageBackground source={background} style={styles.backgroundContainer} imageStyle={styles.imageStyle}>
        <View style={styles.container}>
          <TouchableOpacity style={styles.btnLeft}>
            <Image source={icSearch} style={styles.icon} />
          </TouchableOpacity>

          <TextInput style={styles.input} value={query} onChangeText={value => onChangeQuery(value)} />

          <TouchableOpacity style={styles.btnRight}>
            <Text>x</Text>
          </TouchableOpacity>
        </View>
      </ImageBackground>
    );

  return (
    <ImageBackground source={background} style={styles.backgroundContainer} imageStyle={styles.imageStyle} />
  );
};

export default HeaderBackground;
