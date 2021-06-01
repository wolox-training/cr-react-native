import React from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '@constants/colors';

import styles from './styles';

interface Props {
  isLoading?: boolean;
}

const withLoading = (Component: React.ComponentType<Props>) => (props: Props) =>
  props.isLoading ? (
    <View style={styles.container}>
      <ActivityIndicator color={COLORS.primary} size="large" />
    </View>
  ) : (
    <Component {...props} />
  );

export default withLoading;
