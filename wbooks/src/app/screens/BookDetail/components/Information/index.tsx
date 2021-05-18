import React from 'react';
import { View, Text, Image } from 'react-native';
import bcInicio from '@assets/General/bc_inicio.png';
import Button from '@components/Button';

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
      <Button text={'RENT'} />
    </View>
  );
};

export default Information;
