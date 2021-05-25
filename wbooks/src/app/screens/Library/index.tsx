import React, { useEffect } from 'react';
import { View } from 'react-native';
import BookList from '@components/BookList/index';
import Book from '@interfaces/book';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '@redux/book/actions';

import styles from './styles';

interface RootState {
  books: Book[];
}

const Library = () => {
  const dispatch = useDispatch();
  const books = useSelector((state: RootState) => state.books);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <BookList books={books} />
    </View>
  );
};

export default Library;
