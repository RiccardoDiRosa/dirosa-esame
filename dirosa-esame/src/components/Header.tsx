import './Header.css';

export function Header() {
  return (
    <header className="header">
      <div className="header__brand">Movie App</div>
      <nav className="header__nav">
        <a href="/">Home / Elenco</a>
      </nav>
    </header>
  );
}
