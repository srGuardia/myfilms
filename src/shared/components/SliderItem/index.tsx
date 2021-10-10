import React, { FC } from 'react';
import { Ionicons } from '@expo/vector-icons';

import { Container, BannerItem, Title, RateContainer, Rate } from './style';
import colors from '../../styles/colors';

type MoviesProps = {
  data: {
    id: string;
    title: string;
    popularity: number;
    vote_count: number;
    vote_average: number;
    poster_path: string;
  };
  navigatePage: (item: any) => void;
};

export const SliderItem: FC<MoviesProps> = ({ data, navigatePage }) => (
  <Container activeOpacity={0.8} onPress={() => navigatePage(data)}>
    <BannerItem
      resizeMethod='resize'
      source={{
        uri: `https://image.tmdb.org/t/p/original/${data.poster_path}`,
      }}
    />

    <Title numberOfLines={1}>{data.title}</Title>

    <RateContainer>
      <Ionicons name='md-star' size={12} color={colors.yellow} />
      <Rate>{data.vote_average}/10</Rate>
    </RateContainer>
  </Container>
);
