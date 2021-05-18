import React from 'react';
import { ScrollView } from 'react-native';
import { StackNavigationProp } from '@react-navigation/stack';
import { LibraryStackParamList } from '@interfaces/navigation';
import { RouteProp } from '@react-navigation/native';
import Information from '@screens/BookDetail/components/Information';

import styles from './styles';

type ProfileScreenNavigationProp = StackNavigationProp<LibraryStackParamList, 'BookDetail'>;
type ProfileScreenRouteProp = RouteProp<LibraryStackParamList, 'BookDetail'>;

type Props = {
  route: ProfileScreenRouteProp;
  navigation: ProfileScreenNavigationProp;
};

const BookDetail = ({ route }: Props) => {
  return (
    <ScrollView style={styles.container}>
      <Information {...route.params} />
    </ScrollView>
  );
};

export default BookDetail;
