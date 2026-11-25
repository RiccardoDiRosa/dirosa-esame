import { Link } from 'react-router-dom';
import type { DetailButtonProps } from '../types';

export function DetailButton({ movieId, disabled }: DetailButtonProps) {
  if (disabled) {
    return <span className="card__cta card__cta--disabled">Dettaglio</span>;
  }

  return (
    <Link className="card__cta" to={`/movies/${movieId}`}>
      Dettaglio
    </Link>
  );
}
