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

const BookData: ListRenderItem<Props> = ({ item }) => (
  <TouchableOpacity style={styles.bookCard}>
    <View style={styles.dataContainer}>
      <Image source={item.imageUrl ? { uri: item.imageUrl } : bcInicio} style={styles.imageBook} />
      <View>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.author}>{item.author}</Text>
      </View>
    </View>
  </TouchableOpacity>
);

export default BookData;
