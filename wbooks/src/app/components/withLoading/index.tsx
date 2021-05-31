import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '@constants/colors';

interface Props {
  isLoading?: boolean;
}

const withLoading = <P extends Props>(Component: React.ComponentType<P>) =>
  (props: P) =>
    props.isLoading ? <ActivityIndicator color={COLORS.lightBlue} /> : <Component {...props} />;

export default withLoading;
