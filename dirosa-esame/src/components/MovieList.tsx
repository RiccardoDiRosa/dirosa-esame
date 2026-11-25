import type { MovieListProps } from '../types';
import { MovieCard } from './MovieCard';

export function MovieList({ movies }: MovieListProps) {
  if (movies.length === 0) {
    return <p>Nessun film trovato.</p>;
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
