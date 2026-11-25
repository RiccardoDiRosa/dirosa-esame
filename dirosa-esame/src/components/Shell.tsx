import { Outlet } from 'react-router-dom';
import { Header } from './Header';
import './Shell.css';

export function Shell() {
  return (
    <div className="shell">
      <Header />
      <main className="main">
        <Outlet />
      </main>
    </div>
  );
}
