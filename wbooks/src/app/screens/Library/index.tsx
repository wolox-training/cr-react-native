import React, { useEffect } from 'react';
import { View, FlatList, ListRenderItem } from 'react-native';
import BookData from '@screens/Library/components/BookData';
import Book from '@interfaces/book';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '@redux/book/actions';

import styles from './styles';

interface RootState {
  book: { books: Book[] };
}

const Library = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  const { books } = useSelector((state: RootState) => state.book);

  const renderItem: ListRenderItem<Book> = ({ item }) => <BookData {...item} />;

  const keyExtractor = (item: Book) => item.id.toString();

  return (
    <View style={styles.container}>
      <FlatList data={books} renderItem={renderItem} keyExtractor={keyExtractor} />
    </View>
  );
};

export default Library;
