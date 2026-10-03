function Footer({ brand, description, socialLinks }) {
  const [brandStart, brandEnd] = brand.split(" & ");

  return (
    <footer className="main-footer">
      <div className="footer-brand">
        <a href="/#inicio" className="footer-logo">
          {brandStart} <span>&</span> {brandEnd}
        </a>
        <p>{description}</p>
      </div>

      <div className="social-links" aria-label="Redes sociales">
        {socialLinks.map((socialLink) => (
          <a
            key={socialLink.label}
            href={socialLink.url}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={socialLink.label}
          >
            <i className={socialLink.icon} aria-hidden="true" />
          </a>
        ))}
      </div>

      <p className="copyright">
        &copy; {new Date().getFullYear()} {brand}. Todos los derechos reservados.
      </p>
    </footer>
  );
}

export default Footer;
