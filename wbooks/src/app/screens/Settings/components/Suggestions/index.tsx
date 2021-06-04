import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity, ListRenderItem } from 'react-native';
import { useSelector } from 'react-redux';
import Carousel from 'react-native-snap-carousel';
import Book from '@interfaces/book';
import bcInicio from '@assets/General/bc_inicio.png';
import { useNavigation } from '@react-navigation/native';

import styles from './styles';

interface RootState {
  auth: { currentUser: string };
  book: { books: Book[] };
}

const Suggestions = () => {
  const navigation = useNavigation();

  const { books } = useSelector((state: RootState) => state.book);

  const navigateToBookDetail = (book: Book) => navigation.navigate('BookDetail', { ...book });

  const renderItem: ListRenderItem<Book> = ({ item }) => {
    return (
      <TouchableOpacity style={styles.touchable} onPress={() => navigateToBookDetail(item)}>
        <ImageBackground
          source={item.imageUrl ? { uri: item.imageUrl } : bcInicio}
          style={styles.containerBackground}
          imageStyle={styles.image}>
          <View style={styles.containerBookTitle}>
            <Text>{item.title}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <>
      <Text style={styles.title}>Suggestions</Text>
      <View style={styles.containerCarousel}>
        <Carousel data={books} renderItem={renderItem} sliderWidth={350} itemWidth={300} />
      </View>
    </>
  );
};

export default Suggestions;
