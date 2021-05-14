import React from 'react';
import { View, Text, TouchableOpacity, Image, ListRenderItem } from 'react-native';
import bcInicio from '@assets/General/bc_inicio.png';

import styles from './styles';

interface Props {
  id: number;
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
}

const BookData: ListRenderItem<Props> = ({ item }) => {
  const { author, imageUrl, title } = item;
  return (
    <TouchableOpacity style={styles.bookCard}>
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
