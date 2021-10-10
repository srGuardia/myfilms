import React, { FC } from 'react';
import { Container, Name } from './style';

type GenresProps = {
  data: {
    id: string;
    name: string;
  };
};

export const Genres: FC<GenresProps> = ({ data }) => (
  <Container>
    <Name>{data.name}</Name>
  </Container>
);
