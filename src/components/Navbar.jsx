function Navbar({ brand, links }) {
  const [brandStart, brandEnd] = brand.split(" & ");

  return (
    <header className="main-header">
      <nav className="navbar" aria-label="Navegación principal">
        <a href="/#inicio" className="logo" aria-label={`Ir al inicio de ${brand}`}>
          {brandStart} <span>&</span> {brandEnd}
        </a>

        <ul className="nav-links">
          {links.map((link) => (
            <li key={link.url}>
              <a href={link.url}>{link.label}</a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
