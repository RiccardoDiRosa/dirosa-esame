import type { GenreListProps } from '../types';

export function GenreList({ genres }: GenreListProps) {
  if (genres.length === 0) {
    return null;
  }

  return (
    <div className="detail__genres">
      {genres.map((genre) => (
        <span key={genre.id} className="genre">
          {genre.name}
        </span>
      ))}
    </div>
  );
}
