import heroImage from "../assets/images/hero-cafe.jpg";

function Hero() {
  return (
    <section id="inicio" className="hero">
      <div className="hero-content">
        <p className="hero-label">Café de especialidad · Pastelería · Brunch</p>
        <h1>Miga & Coffee</h1>
        <h2>Café, sabores artesanales y momentos para disfrutar</h2>
        <p className="hero-description">
          Un espacio cálido donde cada taza y cada receta están preparados para
          acompañar tus mejores momentos.
        </p>

        <div className="hero-buttons">
          <a href="#productos" className="button button-primary">
            <i className="fa-solid fa-mug-hot" aria-hidden="true" />
            Ver productos
          </a>
          <a href="#contacto" className="button button-secondary">
            <i className="fa-solid fa-calendar-check" aria-hidden="true" />
            Reservar una mesa
          </a>
        </div>
      </div>

      <div className="hero-image-container">
        <img
          src={heroImage}
          alt="Mesa servida con café y pastelería artesanal en Miga & Coffee"
          className="hero-image"
        />
      </div>
    </section>
  );
}

export default Hero;
