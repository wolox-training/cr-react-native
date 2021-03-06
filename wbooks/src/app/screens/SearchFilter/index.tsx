import React, { useMemo } from 'react';
import { View, Image, Text, StatusBar } from 'react-native';
import Book from '@interfaces/book';
import { useSelector } from 'react-redux';
import BookList from '@components/BookList/index';
import icSearch from '@assets/General/ic_search_placeholder.png';
import { TEXTS } from '@constants/texts';
import { COLORS } from '@constants/colors';

import styles from './styles';

interface RootState {
  book: { books: Book[]; query: string };
}

const SearchFilter = () => {
  const { books, query } = useSelector((state: RootState) => state.book);

  const filteredBooks = useMemo(
    () => books.filter(book => book.title.toLowerCase().includes(query.toLowerCase())),
    [books, query]
  );

  if (filteredBooks.length && query)
    return (
      <View style={styles.listContainer}>
        <BookList books={filteredBooks} />
      </View>
    );

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={COLORS.black30} />
      <Image source={icSearch} />
      <Text style={styles.title}>{TEXTS.title}</Text>
      <Text style={styles.subTitle}>{filteredBooks.length ? TEXTS.subTitle : TEXTS.error}</Text>
    </View>
  );
};

export default SearchFilter;
