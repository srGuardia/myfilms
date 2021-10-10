import React, { FC } from 'react';
import { View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { BackButton, Name } from './styles';
import colors from '../../styles/colors';
import WebView from 'react-native-webview';

type ModalProps = {
  link: string;
  title: string;
  closeModal: () => void;
};

export const ModalLink: FC<ModalProps> = ({ link, title, closeModal }) => (
  <>
    <BackButton onPress={closeModal}>
      <Feather name='x' size={35} color={colors.white} />
      <Name numberOfLines={1}>{title}</Name>
    </BackButton>

    <WebView source={{ uri: link }} />
  </>
);
