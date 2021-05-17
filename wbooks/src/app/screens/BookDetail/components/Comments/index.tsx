import React, { useState } from 'react';
import { View, Text, TouchableOpacity, Image } from 'react-native';
import { COMMENTS_MOCK } from '@constants/mockComments';
import user1 from '@assets/General/img_user1.png';
import user2 from '@assets/General/img_user2.png';

import styles from './styles';

const Comments = () => {
  const [viewAll, setViewAll] = useState(false);
  return (
    <View style={styles.commentCard}>
      {COMMENTS_MOCK.filter(comment => (viewAll ? true : comment.id < 2)).map(comment => (
        <View style={styles.comment} key={comment.id}>
          <Image source={comment.id % 2 ? user1 : user2} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.author}>{comment.author}</Text>
            <Text style={styles.text}>{comment.text}</Text>
          </View>
        </View>
      ))}
      <TouchableOpacity onPress={() => setViewAll(!viewAll)}>
        <Text style={styles.viewAll}>{viewAll ? 'View Less' : 'View All'}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Comments;
