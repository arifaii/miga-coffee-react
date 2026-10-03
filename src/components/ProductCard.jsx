function ProductCard({ image, alt, icon, title, description, link, linkText }) {
  return (
    <article className="product-card">
      <img src={image} alt={alt} />
      <div className="card-content">
        <i className={`${icon} card-icon`} aria-hidden="true" />
        <h3>{title}</h3>
        <p>{description}</p>
        <a href={link} className="card-button">
          {linkText}
        </a>
      </div>
    </article>
  );
}

export default ProductCard;
