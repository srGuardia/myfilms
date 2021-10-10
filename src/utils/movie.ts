// Gera uma lista com o tamanho desejado

type MoviesProps = {
  id: string;
  title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  poster_path: string;
};

export const getListMovies = (size: number, movies: MoviesProps[]) => {
  let popularMovies = new Array<MoviesProps>();

  for (let index = 0; index < size; index++) {
    popularMovies.push(movies[index]);
  }

  return popularMovies;
};

export const generateBanner = (array: MoviesProps[]) => {
  return Math.floor(Math.random() * array.length);
};
