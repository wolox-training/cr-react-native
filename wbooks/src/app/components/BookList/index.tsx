import React from 'react';
import { FlatList, ListRenderItem } from 'react-native';
import BookData from '@components/BookList/components/BookData';
import Book from '@interfaces/book';

interface Props {
  books: Book[];
}

const BookList = ({ books }: Props) => {
  const renderItem: ListRenderItem<Book> = ({ item }) => <BookData {...item} />;

  const keyExtractor = (item: Book) => item.id.toString();

  return <FlatList data={books} renderItem={renderItem} keyExtractor={keyExtractor} />;
};

export default BookList;
