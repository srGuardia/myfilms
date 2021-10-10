import React, { FC } from 'react';
import { Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

import { Container, MenuButton, Title } from './style';
import colors from '../../styles/colors';

type HeaderProps = {
  title: string;
};

export const Header: FC<HeaderProps> = ({ title }) => {
  const navigation = useNavigation<any>();

  return (
    <Container>
      <MenuButton onPress={() => navigation.openDrawer()}>
        <Feather name='menu' size={36} color={colors.white} />
      </MenuButton>

      <Title>{title}</Title>
    </Container>
  );
};
