import { useParams } from 'react-router-dom';

export function MovieDetailPage() {
  const { id } = useParams();

  return (
    <div>
      <h1>Dettaglio film #{id}</h1>
    </div>
  );
}
