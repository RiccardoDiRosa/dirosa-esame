import type { MovieCardProps } from '../types';
import { DetailButton } from './DetailButton';
import { MovieMeta } from './MovieMeta';
import { PosterImage } from './PosterImage';

export function MovieCard({ movie }: MovieCardProps) {
  return (
    <article className="card">
      <div className="card__poster">
        <PosterImage posterPath={movie.poster_path} title={movie.title} />
      </div>
      <div className="card__body">
        <h2 className="card__title">{movie.title}</h2>
        <MovieMeta
          releaseDate={movie.release_date}
          voteAverage={movie.vote_average}
          overview={movie.overview}
        />
        <DetailButton movieId={movie.id} />
      </div>
    </article>
  );
}
