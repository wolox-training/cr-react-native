import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '@constants/colors';

import styles from './styles';

interface Props {
  isLoading?: boolean;
}

const withLoading =
  <P extends Props>(Component: React.ComponentType<P>) =>
  (props: P) =>
    props.isLoading ? (
      <View style={styles.container}>
        <ActivityIndicator color={COLORS.primary} size="large" />
      </View>
    ) : (
      <Component {...props} />
    );

export default withLoading;
