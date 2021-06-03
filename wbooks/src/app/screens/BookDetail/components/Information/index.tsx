import React, { useState, useRef } from 'react';
import { View, Text, Image, Animated, TouchableOpacity } from 'react-native';
import bcInicio from '@assets/General/bc_inicio.png';
import Button from '@components/Button';
import icMyrentals from '@assets/ToolBar/ic_myrentals.png';

import styles from './styles';

interface Props {
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
}

const Information = ({ title, author, imageUrl, year, genre }: Props) => {
  const [isRented, setIsRented] = useState(false);
  const showUpAnim = useRef(new Animated.Value(0)).current;

  const onRent = () => {
    setIsRented(true);
    Animated.timing(showUpAnim, {
      toValue: 2,
      duration: 400,
      useNativeDriver: true
    }).start();
  };

  return (
    <View style={styles.bookCard}>
      <View style={styles.dataContainer}>
        <Image source={imageUrl ? { uri: imageUrl } : bcInicio} style={styles.detailImageBook} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.subTitle}>{author}</Text>
          <Text style={styles.subTitle}>{year}</Text>
          <Text style={styles.subTitle}>{genre}</Text>
        </View>
      </View>
      <Button solid={false} text={'ADD TO WISH LIST'} />
      {isRented ? (
        <Animated.View style={[styles.successBtn, { transform: [{ scale: showUpAnim }] }]}>
          <Image style={styles.successImage} source={icMyrentals} />
        </Animated.View>
      ) : (
        <TouchableOpacity onPress={onRent}>
          <Button text={'RENT'} />
        </TouchableOpacity>
      )}
    </View>
  );
};

export default Information;
