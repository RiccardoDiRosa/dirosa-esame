import type { Genre, MovieDetail, MovieListItem } from './movie';

export type MovieListProps = {
  movies: MovieListItem[];
};

export type MovieCardProps = {
  movie: MovieListItem;
};

export type PosterImageProps = {
  posterPath: string | null;
  title: string;
};

export type MovieMetaProps = {
  releaseDate: string;
  voteAverage: number;
  overview: string;
};

export type DetailButtonProps = {
  movieId: number;
  disabled?: boolean;
};

export type MovieFactsProps = {
  movie: MovieDetail;
};

export type GenreListProps = {
  genres: Genre[];
};
