import { useEffect, useState } from 'react';
import { MovieList } from '../components/MovieList';
import type { MovieListItem, MovieSearchResponse } from '../types';
import './MovieListPage.css';

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const MOVIES_API_URL =
  `https://api.themoviedb.org/3/search/movie?query=The%20Lord%20of%20the%20Rings&include_adult=false&language=en-US&page=1&api_key=${API_KEY}`;

export function MovieListPage() {
  const [movies, setMovies] = useState<MovieListItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadMovies() {
      try {
        setLoading(true);
        setError(null);

        const response = await fetch(MOVIES_API_URL);
        if (!response.ok) {
          throw new Error('Errore nel caricamento dei film');
        }

        const data: MovieSearchResponse = await response.json();
        setMovies(data.results.slice(0, 20));
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Errore imprevisto');
      } finally {
        setLoading(false);
      }
    }

    loadMovies();
  }, []);

  return (
    <section>
      <h1 className="page-title">The Lord of the Rings</h1>
      <p className="page-sub">
        Risultati fissi da API · query=The Lord of the Rings · page=1 · max 20
        items · senza filtri / paginazione
      </p>

      {loading && <p>Caricamento...</p>}
      {error && <p>{error}</p>}
      {!loading && !error && <MovieList movies={movies} />}
    </section>
  );
}
