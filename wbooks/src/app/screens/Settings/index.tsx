import { COLORS } from '@constants/colors';
import React from 'react';
import { View, Text, StatusBar, Image } from 'react-native';
import { useSelector } from 'react-redux';
import Book from '@interfaces/book';
import imgUser from '@assets/General/img_user1.png';

import Suggestions from './components/Suggestions';
import styles from './styles';

interface RootState {
  auth: { currentUser: string };
  book: { books: Book[] };
}

const Settings = () => {
  const { currentUser } = useSelector((state: RootState) => state.auth);

  return (
    <View style={styles.container}>
      <StatusBar animated backgroundColor={COLORS.black30} />
      <View style={styles.profile}>
        <Text style={styles.title}>Profile</Text>
        <Image source={imgUser} style={styles.imageProfile} />
        <Text style={styles.user}>{currentUser}</Text>
      </View>
      <Suggestions />
    </View>
  );
};

export default Settings;
