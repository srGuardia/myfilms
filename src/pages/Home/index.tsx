import React, { FC, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons';

import { Header } from '../../shared/components/Header';
import {
  Container,
  SearchContainer,
  Input,
  SearchButton,
  Title,
  BannerButton,
  Banner,
  SliderMovie,
  Loading,
} from './styles';
import colors from '../../shared/styles/colors';
import { ActivityIndicator, ScrollView } from 'react-native';
import { SliderItem } from '../../shared/components/SliderItem';
import TheMovieDB from '../../services/api';
import { getListMovies, generateBanner } from '../../utils/movie';
import { useNavigation } from '@react-navigation/native';

type MoviesProps = {
  id: string;
  title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  poster_path: string;
};

export const Home: FC = () => {
  const [newFilms, setNewFilms] = useState<MoviesProps[]>([]);
  const [popularFilms, setPopularFilms] = useState<MoviesProps[]>([]);
  const [topFilms, setTopFilms] = useState<MoviesProps[]>([]);
  const [movieBanner, setMovieBanner] = useState<MoviesProps>(
    {} as MoviesProps
  );
  const [loading, setLoading] = useState<boolean>(true);

  const navigation = useNavigation();

  useEffect(() => {
    let isActive = true;
    const ac = new AbortController();

    (async () => {
      const [nowMovies, popularMovies, topMovies] = await Promise.all([
        TheMovieDB.getNewMovies(),
        TheMovieDB.getPopularMovies(),
        TheMovieDB.getTopMovies(),
      ]);

      if (isActive) {
        setNewFilms(getListMovies(20, nowMovies.data.results));
        setPopularFilms(getListMovies(5, popularMovies.data.results));
        setTopFilms(getListMovies(10, topMovies.data.results));
        setMovieBanner(
          nowMovies.data.results[generateBanner(nowMovies.data.results)]
        );
        setLoading(false);
      }
    })();

    return () => {
      (isActive = false), ac.abort();
    };
  }, []);

  const navigateDetailPage = (item: MoviesProps) =>
    navigation.navigate('Detail', item.id);

  if (loading)
    return (
      <Loading>
        <ActivityIndicator size='large' color={colors.red} />
      </Loading>
    );

  return (
    <Container>
      <Header title='Native Prime' />

      <SearchContainer>
        <Input placeholder='Search...' placeholderTextColor={colors.gray} />

        <SearchButton>
          <Feather name='search' size={30} color={colors.white} />
        </SearchButton>
      </SearchContainer>

      <ScrollView showsVerticalScrollIndicator={false}>
        <Title>Em cartaz</Title>

        <BannerButton
          activeOpacity={0.8}
          onPress={() => navigateDetailPage(movieBanner)}
        >
          <Banner
            resizeMethod='resize'
            source={{
              uri: `https://image.tmdb.org/t/p/original/${movieBanner?.poster_path}`,
            }}
          />
        </BannerButton>

        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={newFilms}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => (
            <SliderItem
              data={item}
              navigatePage={() => navigateDetailPage(item)}
            />
          )}
        />

        <Title>Populares</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={popularFilms}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => (
            <SliderItem
              data={item}
              navigatePage={() => navigateDetailPage(item)}
            />
          )}
        />

        <Title>Mais votados</Title>
        <SliderMovie
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          data={topFilms}
          keyExtractor={(item: any) => String(item.id)}
          renderItem={({ item }: any) => (
            <SliderItem
              data={item}
              navigatePage={() => navigateDetailPage(item)}
            />
          )}
        />
      </ScrollView>
    </Container>
  );
};
