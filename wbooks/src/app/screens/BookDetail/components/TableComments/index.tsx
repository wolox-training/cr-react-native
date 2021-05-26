import React from 'react';
import { View, Text, Image } from 'react-native';
import Comment from '@interfaces/comment';

import styles from './styles';

const TableComments = ({ author, text, authorImage }: Comment) => {
  return (
    <View style={styles.commentCard}>
      <View style={styles.comment}>
        <Image source={authorImage} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.author}>{author}</Text>
          <Text style={styles.text}>{text}</Text>
        </View>
      </View>
    </View>
  );
};

export default TableComments;
