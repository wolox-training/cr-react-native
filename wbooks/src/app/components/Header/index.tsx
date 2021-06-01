import React from 'react';
import { View, ImageBackground, TextInput, Text, TouchableOpacity, Image } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '@redux/book/actions';
import background from '@assets/General/bc_nav_bar.png';
import icSearch from '@assets/General/ic_search_placeholder.png';

import styles from './styles';

interface Props {
  routeName?: any;
}

interface RootState {
  book: { query: string };
}

const HeaderBackground = ({ routeName }: Props) => {
  const dispatch = useDispatch();
  const { query } = useSelector((state: RootState) => state.book);

  const onChangeQuery = (text: string) => {
    dispatch(actionCreators.setQuery(text));
  };

  const deleteQuery = () => {
    dispatch(actionCreators.setQuery(''));
  };

  if (routeName === 'SearchFilter')
    return (
      <ImageBackground source={background} style={styles.backgroundContainer} imageStyle={styles.imageStyle}>
        <View style={styles.container}>
          <Image source={icSearch} style={styles.icon} />

          <TextInput style={styles.input} value={query} onChangeText={value => onChangeQuery(value)} />

          <TouchableOpacity style={styles.btnRight} onPress={deleteQuery}>
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
