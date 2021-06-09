import React, { useEffect, useRef } from 'react';
import { View, Text, TouchableOpacity, Image, Animated } from 'react-native';
import bcInicio from '@assets/General/bc_inicio.png';
import { useNavigation } from '@react-navigation/native';
import Book from '@interfaces/book';

import styles from './styles';

const BookData = ({ id, title, author, imageUrl, year, genre }: Book) => {
  const navigation = useNavigation();
  const fadeAnim = useRef(new Animated.Value(0)).current;

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: id * 700,
      useNativeDriver: true
    }).start();
  }, [fadeAnim, id]);

  const navigateToBookDetail = () =>
    navigation.navigate('BookDetail', {
      title,
      author,
      imageUrl,
      year,
      genre
    });

  return (
    <Animated.View
      style={{
        opacity: fadeAnim
      }}>
      <TouchableOpacity style={styles.bookCard} onPress={navigateToBookDetail}>
        <View style={styles.dataContainer}>
          <Image source={imageUrl ? { uri: imageUrl } : bcInicio} style={styles.imageBook} />
          <View style={styles.textContainer}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.author}>{author}</Text>
          </View>
        </View>
      </TouchableOpacity>
    </Animated.View>
  );
};

export default BookData;
