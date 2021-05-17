import React from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import BookData from '@screens/Library/components/BookData';
import Book from '@interfaces/Book';

import styles from './styles';

const Library = () => {
  const renderItem: ListRenderItem<Book> = ({ item }) => <BookData {...item} />;
  return (
    <View style={styles.container}>
      <FlatList data={BOOKS_MOCK} renderItem={renderItem} keyExtractor={item => item.id.toString()} />
    </View>
  );
};

export default Library;
