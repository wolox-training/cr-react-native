import React from 'react';
import { View, FlatList } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';
import BookData from '@screens/Library/components/BookData';

import styles from './styles';

const Library: React.FC = () => {
  return (
    <View style={styles.container}>
      <FlatList data={BOOKS_MOCK} renderItem={BookData} keyExtractor={item => item.id.toString()} />
    </View>
  );
};

export default Library;
