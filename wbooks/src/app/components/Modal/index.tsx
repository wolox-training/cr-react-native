import React from 'react';
import { View, Text, Modal as Mdl } from 'react-native';
import Button from '@components/Button';

import styles from './style';

interface Props {
  message: string;
  isVisible: boolean;
  onConfirm: () => void;
  onReject: () => void;
}

const Modal = ({ message, isVisible, onConfirm, onReject }: Props) => (
  <Mdl animationType="slide" transparent visible={isVisible}>
    <View style={styles.centeredView}>
      <View style={styles.modalView}>
        <Text style={styles.message}>{message}</Text>
        <Button text={'YES'} onPressBtn={onConfirm} />
        <Button solid={false} text={'NO'} onPressBtn={onReject} />
      </View>
    </View>
  </Mdl>
);

export default Modal;
