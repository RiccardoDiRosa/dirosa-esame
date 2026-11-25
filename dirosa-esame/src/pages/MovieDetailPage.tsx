import { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import { GenreList } from '../components/GenreList';
import { MovieFacts } from '../components/MovieFacts';
import { PosterImage } from '../components/PosterImage';
import type { MovieDetail } from '../types';
import './MovieDetailPage.css';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;

export function MovieDetailPage() {
  const { id } = useParams();
  const [movie, setMovie] = useState<MovieDetail | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMovie() {
      if (!id) return;

      try {
        setLoading(true);
        setError(null);

        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}`
        );
        if (!response.ok) {
          throw new Error('Film non trovato o errore nel caricamento');
        }

        const data: MovieDetail = await response.json();
        setMovie(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errore imprevisto');
      } finally {
        setLoading(false);
      }
    }

    loadMovie();
  }, [id]);

  return (
    <section>
      <Link className="back-link" to="/">
        ← Torna all’elenco
      </Link>

      {loading && <p>Caricamento...</p>}
      {error && <p>{error}</p>}

      {!loading && !error && movie && (
        <article className="detail">
          <div className="detail__poster">
            <PosterImage posterPath={movie.poster_path} title={movie.title} />
          </div>

          <div>
            <h1 className="detail__title">{movie.title}</h1>
            {movie.tagline && (
              <p className="detail__tagline">“{movie.tagline}”</p>
            )}

            <MovieFacts movie={movie} />
            <GenreList genres={movie.genres} />

            <p className="detail__overview-label">Trama</p>
            <p className="detail__overview">
              {movie.overview || 'Nessuna trama disponibile.'}
            </p>

            {movie.production_companies.length > 0 && (
              <p className="detail__production">
                Produzione:{' '}
                {movie.production_companies.map((c) => c.name).join(' · ')}
              </p>
            )}
          </div>
        </article>
      )}
    </section>
  );
}
