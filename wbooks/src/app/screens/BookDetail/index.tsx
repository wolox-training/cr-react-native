import React, { useState } from 'react';
import { FlatList, ListRenderItem, TouchableOpacity, Text, StatusBar } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LibraryStackParamList } from '@interfaces/navigation';
import { RouteProp } from '@react-navigation/native';
import Information from '@screens/BookDetail/components/Information';
import { COMMENTS_MOCK } from '@constants/mockComments';
import TableComments from '@screens/BookDetail/components/TableComments';
import Comment from '@interfaces/comment';
import { COLORS } from '@constants/colors';

import styles from './styles';

type ScreenNavigationProp = StackNavigationProp<LibraryStackParamList, 'BookDetail'>;
type ScreenRouteProp = RouteProp<LibraryStackParamList, 'BookDetail'>;

type Props = {
  route: ScreenRouteProp;
  navigation: ScreenNavigationProp;
};

const BookDetail = ({ route }: Props) => {
  const [mock, setMock] = useState(COMMENTS_MOCK.filter(comment => comment.id < 2));

  const onPressViewAll = () => setMock(COMMENTS_MOCK);

  const Footer = () => (
    <TouchableOpacity onPress={onPressViewAll}>
      <Text style={styles.viewAll}>View All</Text>
    </TouchableOpacity>
  );

  const renderItem: ListRenderItem<Comment> = ({ item }) => <TableComments {...item} />;

  const keyExtractor = (item: Comment) => item.id.toString();

  return (
    <>
      <StatusBar animated backgroundColor={COLORS.black30} />
      <FlatList
        style={styles.container}
        ListHeaderComponentStyle={styles.header}
        ListHeaderComponent={<Information {...route.params} />}
        data={mock}
        extraData={mock}
        renderItem={renderItem}
        keyExtractor={keyExtractor}
        ListFooterComponentStyle={styles.footer}
        ListFooterComponent={Footer}
      />
    </>
  );
};

export default BookDetail;
