import React from 'react';
import { View, FlatList } from 'react-native';
import { BOOKS_MOCK } from '@constants/mockBooks';

import BookData from '../BookData';

const Library: React.FC = () => {
  return (
    <View>
      <FlatList data={BOOKS_MOCK} renderItem={BookData} keyExtractor={item => item.id.toString()} />
    </View>
  );
};

export default Library;
