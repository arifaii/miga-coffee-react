import { Link } from "react-router-dom";

function NotFound() {
  return (
    <main className="not-found">
      <p className="section-label">Error 404</p>
      <h1>Página no encontrada</h1>
      <p>La dirección que ingresaste no existe o fue modificada.</p>
      <Link className="button button-primary" to="/">
        Volver al inicio
      </Link>
    </main>
  );
}

export default NotFound;
