import React from 'react';
import { ActivityIndicator } from 'react-native';
import { COLORS } from '@constants/colors';

interface Props {
  isLoading?: boolean;
}

const withLoading =
  <P extends Props>(WrappedComponent: React.ComponentType<P>) =>
  (props: P) =>
    props.isLoading ? <ActivityIndicator color={COLORS.lightBlue} /> : <WrappedComponent {...props} />;

export default withLoading;
