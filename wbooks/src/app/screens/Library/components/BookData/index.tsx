import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import bcInicio from '@assets/General/bc_inicio.png';
import { useNavigation } from '@react-navigation/native';
import Book from '@interfaces/Book';

import styles from './styles';

const BookData = ({ title, author, imageUrl, year, genre }: Book) => {
  const navigation = useNavigation();

  return (
    <TouchableOpacity
      style={styles.bookCard}
      onPress={() =>
        navigation.navigate('BookDetail', {
          title,
          author,
          imageUrl,
          year,
          genre
        })
      }>
      <View style={styles.dataContainer}>
        <Image source={imageUrl ? { uri: imageUrl } : bcInicio} style={styles.imageBook} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default BookData;
