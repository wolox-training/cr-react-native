import React, { useEffect } from 'react';
import { View, StatusBar } from 'react-native';
import BookList from '@components/BookList/index';
import Book from '@interfaces/book';
import { useDispatch, useSelector } from 'react-redux';
import actionCreators from '@redux/book/actions';
import { COLORS } from '@constants/colors';

import styles from './styles';

interface RootState {
  book: { books: Book[] };
}

const Library = () => {
  const dispatch = useDispatch();
  const { books } = useSelector((state: RootState) => state.book);

  useEffect(() => {
    dispatch(actionCreators.getBooks());
  }, [dispatch]);

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={COLORS.black30} />
      <BookList books={books} />
    </View>
  );
};

export default Library;
