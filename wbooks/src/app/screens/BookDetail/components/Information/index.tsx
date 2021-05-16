import React from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import bcInicio from '@assets/General/bc_inicio.png';

import styles from './styles';

interface Props {
  author: string;
  title: string;
  genre: string;
  publisher: string;
  year: string;
  imageUrl: string | null;
}

const BookDetail = ({ title, author, imageUrl, year, genre }: Props) => {
  return (
    <View style={styles.bookCard}>
      <View style={styles.dataContainer}>
        <Image source={imageUrl ? { uri: imageUrl } : bcInicio} style={styles.detailImageBook} />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.author}>{year}</Text>
          <Text style={styles.author}>{genre}</Text>
        </View>
      </View>
      <TouchableOpacity style={styles.btnAdd}>
        <Text style={styles.btnAddText}>ADD TO WISH LIST</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.btnRent}>
        <Text style={styles.btnRentText}>RENT</Text>
      </TouchableOpacity>
    </View>
  );
};

export default BookDetail;
