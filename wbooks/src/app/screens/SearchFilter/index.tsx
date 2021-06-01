import React, { useState, useEffect } from 'react';
import { View, Image, Text } from 'react-native';
import Book from '@interfaces/book';
import { useSelector } from 'react-redux';
import BookList from '@components/BookList/index';
import icSearch from '@assets/General/ic_search_placeholder.png';
import { TEXTS } from '@constants/texts';

import styles from './styles';

interface RootState {
  book: { books: Book[]; query: string };
}

const SearchFilter = () => {
  const { books, query } = useSelector((state: RootState) => state.book);
  const [filteredBooks, setFilteredBooks] = useState<Book[]>([]);

  useEffect(() => {
    const newBooks: Book[] | [] = books.filter(book =>
      book.title.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredBooks(newBooks);
  }, [books, query]);

  if (filteredBooks.length && query) return <BookList books={filteredBooks} />;

  return (
    <View style={styles.container}>
      <Image source={icSearch} />
      <Text style={styles.title}>{TEXTS.title}</Text>
      <Text style={styles.subTitle}>{filteredBooks.length ? TEXTS.subTitle : TEXTS.error}</Text>
    </View>
  );
};

export default SearchFilter;
