import axios from 'axios';

const config = axios.create({
  baseURL: 'https://api.themoviedb.org/3',
  params: {
    api_key: 'f756fdf82291ea60b4ba12417e085fff',
    language: 'pt-BR',
  },
});

type PromiseProps = {
  data: {
    results: MoviesProps[];
  };
};

type MoviesProps = {
  id: string;
  title: string;
  popularity: number;
  vote_count: number;
  vote_average: number;
  poster_path: string;
};

class TheMovieDB {
  async getNewMovies(): Promise<PromiseProps> {
    return await config.get('/movie/now_playing');
  }

  async getDetailMovie(idMovie: string): Promise<MoviesProps> {
    return await config.get(`/movie/${idMovie}`);
  }

  async getPopularMovies(): Promise<PromiseProps> {
    return await config.get('/movie/popular');
  }

  async getTopMovies(): Promise<PromiseProps> {
    return await config.get('/movie/top_rated');
  }
}

export default new TheMovieDB();
