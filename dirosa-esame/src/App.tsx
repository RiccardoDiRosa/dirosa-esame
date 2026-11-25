import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Shell } from './components/Shell';
import { MovieListPage } from './pages/MovieListPage';

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Shell />}>
          <Route path="/" element={<MovieListPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
