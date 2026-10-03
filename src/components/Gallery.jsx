import SectionHeading from "./SectionHeading";

function Gallery({ images }) {
  return (
    <section id="galeria" className="section gallery-section">
      <SectionHeading
        label="Galería"
        title="Una experiencia para todos los sentidos"
        description="Conocé algunos de los sabores y rincones que forman parte de Miga & Coffee."
      />

      <div className="gallery-container">
        {images.map((image) => (
          <figure className="gallery-item" key={image.src}>
            <img src={image.src} alt={image.alt} />
            <figcaption>{image.caption}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}

export default Gallery;
