import React from 'react';
import { TouchableOpacity } from 'react-native';
import icBack from '@assets/NavigationBar/ic_back.png';
import IconHeader from '@app/components/Header/components/IconHeader';

interface Props {
  goLibrary: () => void;
}

const Back = ({ goLibrary }: Props) => (
  <TouchableOpacity onPress={goLibrary}>
    <IconHeader icon={icBack} right={false} />
  </TouchableOpacity>
);

export default Back;
