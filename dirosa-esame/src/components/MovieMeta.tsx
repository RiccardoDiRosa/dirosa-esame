import type { MovieMetaProps } from '../types';

function formatDate(date: string): string {
  if (!date) return 'N/D';
  const [year, month, day] = date.split('-');
  if (!year || !month || !day) return date;
  return `${day}/${month}/${year}`;
}

export function MovieMeta({
  releaseDate,
  voteAverage,
  overview,
}: MovieMetaProps) {
  return (
    <>
      <p className="card__meta">
        Uscita: {formatDate(releaseDate)} · Voto: {voteAverage.toFixed(1)}
      </p>
      <p className="card__overview">
        {overview || 'Nessuna descrizione disponibile.'}
      </p>
    </>
  );
}
