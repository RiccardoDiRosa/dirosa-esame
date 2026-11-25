import type { MovieFactsProps } from '../types';

function formatDate(date: string): string {
  if (!date) return '';
  const [year, month, day] = date.split('-');
  if (!year || !month || !day) return date;
  return `${day}/${month}/${year}`;
}

export function MovieFacts({ movie }: MovieFactsProps) {
  return (
    <ul className="detail__meta">
      {movie.release_date && <li>Uscita: {formatDate(movie.release_date)}</li>}
      {movie.runtime > 0 && <li>Durata: {movie.runtime} min</li>}
      {movie.vote_average > 0 && <li>Voto: {movie.vote_average.toFixed(1)}</li>}
      {movie.vote_count > 0 && (
        <li>Voti: {movie.vote_count.toLocaleString('it-IT')}</li>
      )}
      {movie.status && <li>Stato: {movie.status}</li>}
      {movie.original_language && (
        <li>
          Lingua:{' '}
          {movie.spoken_languages[0]?.english_name || movie.original_language}
        </li>
      )}
    </ul>
  );
}
