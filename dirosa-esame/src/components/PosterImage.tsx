import type { PosterImageProps } from '../types';

export function PosterImage({ posterPath, title }: PosterImageProps) {
  if (!posterPath) {
    return <span>Poster</span>;
  }

  return (
    <img
      className="poster-img"
      src={`https://image.tmdb.org/t/p/w500${posterPath}`}
      alt={title}
    />
  );
}
