import React, { FC, useEffect, useState } from 'react';
import { Feather, Ionicons } from '@expo/vector-icons';
import { useNavigation, useRoute } from '@react-navigation/native';

import {
  Container,
  Header,
  HeaderButton,
  Banner,
  ButtonLink,
  Title,
  ContentArea,
  Rate,
  ListGenres,
  Description,
} from './styles';
import colors from '../../shared/styles/colors';
import Stars from 'react-native-stars';
import { Genres } from '../../shared/components/Genres';
import TheMovieDB from '../../services/api';
import { ScrollView, Modal } from 'react-native';
import { ModalLink } from '../../shared/components/Modal';

type MoviesProps = {
  id: string;
  title: string;
  overview: string;
  homepage: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  poster_path: string;
  genres: Array<any>[];
};

export const Details: FC = () => {
  const navigation = useNavigation();
  const route = useRoute();

  const [movie, setMovie] = useState<MoviesProps>({} as MoviesProps);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    let isActive = true;

    (async () => {
      const { data } = await TheMovieDB.getDetailMovie(route.params);

      if (isActive) setMovie(data);
    })();

    return () => {
      isActive = false;
    };
  }, []);

  const openCloseModal = () => setVisible((oldState) => !oldState);

  return (
    <Container>
      <Header>
        <HeaderButton activeOpacity={0.8} onPress={() => navigation.goBack()}>
          <Feather name='arrow-left' size={28} color={colors.white} />
        </HeaderButton>

        <HeaderButton>
          <Ionicons name='bookmark' size={28} color={colors.white} />
        </HeaderButton>
      </Header>

      <Banner
        resizeMethod='resize'
        source={{
          uri: `https://image.tmdb.org/t/p/original/${movie?.poster_path}`,
        }}
      />

      <ButtonLink
        activeOpacity={0.8}
        onPress={openCloseModal}
        disabled={!movie.homepage}
        homepage={movie.homepage}
      >
        <Feather name='link' size={24} color={colors.white} />
      </ButtonLink>

      <Title numberOfLines={2}>{movie?.title}</Title>

      <ContentArea>
        <Stars
          default={movie.vote_average}
          count={10}
          holf={true}
          starSize={20}
          fullStar={<Ionicons name='md-star' size={24} color={colors.yellow} />}
          emptytar={
            <Ionicons name='md-star-outline' size={24} color={colors.yellow} />
          }
          halfStar={
            <Ionicons name='md-star-half' size={24} color={colors.yellow} />
          }
          disable={true}
        />

        <Rate>{movie.vote_average}/10</Rate>
      </ContentArea>

      <ListGenres
        keyExtractor={(item: any) => String(item.id)}
        data={movie?.genres}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        renderItem={({ item }: any) => <Genres data={item} />}
      />

      <Title>Descrição</Title>
      <ScrollView>
        <Description>{movie.overview}</Description>
      </ScrollView>

      <Modal animationType='fade' transparent={true} visible={visible}>
        <ModalLink
          link={movie.homepage}
          title={movie.title}
          closeModal={openCloseModal}
        />
      </Modal>
    </Container>
  );
};
