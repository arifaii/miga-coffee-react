import { useState } from "react";

const initialFormData = {
  nombre: "",
  email: "",
  telefono: "",
  motivo: "",
  preferenciaContacto: "",
  novedades: false,
  comentarios: "",
};

function Contact() {
  const [formData, setFormData] = useState(initialFormData);
  const [message, setMessage] = useState("");

  const handleChange = (event) => {
    const { name, value, type, checked } = event.target;
    const newValue = type === "checkbox" ? checked : value;

    console.log(`Evento change en ${name}:`, newValue);
    setFormData((currentData) => ({ ...currentData, [name]: newValue }));
    setMessage("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Evento submit:", event.type);
    console.log("Datos enviados:", formData);
    setMessage("¡Gracias! Recibimos tu consulta correctamente.");
    setFormData({ ...initialFormData });
  };

  const handleReset = () => {
    console.log("Evento reset: formulario limpiado");
    setFormData({ ...initialFormData });
    setMessage("");
  };

  return (
    <section id="contacto" className="section contact-section">
      <div className="contact-container">
        <div className="contact-information">
          <p className="section-label">Contacto</p>
          <h2>¿Querés visitarnos?</h2>
          <p>
            Completá el formulario para hacer una reserva, realizar una consulta
            o pedir información sobre nuestros productos.
          </p>

          <address className="contact-details">
            <p>
              <i className="fa-solid fa-location-dot" aria-hidden="true" />
              Av. Cabildo 1234, CABA, Argentina
            </p>
            <p>
              <i className="fa-solid fa-clock" aria-hidden="true" />
              Lunes a domingo de 8:00 a 20:00 hs
            </p>
            <p>
              <i className="fa-solid fa-envelope" aria-hidden="true" />
              contacto@migaandcoffee.com
            </p>
            <p>
              <i className="fa-solid fa-phone" aria-hidden="true" />
              +54 11 1234 5678
            </p>
          </address>
        </div>

        <form className="contact-form" onSubmit={handleSubmit} onReset={handleReset}>
          <div className="form-group">
            <label htmlFor="nombre">Nombre completo</label>
            <input
              type="text"
              id="nombre"
              name="nombre"
              value={formData.nombre}
              onChange={handleChange}
              placeholder="Ingresá tu nombre"
              autoComplete="name"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Correo electrónico</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="nombre@email.com"
              autoComplete="email"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="telefono">Teléfono</label>
            <input
              type="tel"
              id="telefono"
              name="telefono"
              value={formData.telefono}
              onChange={handleChange}
              placeholder="11 1234-5678"
              autoComplete="tel"
              required
            />
          </div>

          <div className="form-group">
            <label htmlFor="motivo">Motivo del contacto</label>
            <select
              name="motivo"
              id="motivo"
              value={formData.motivo}
              onChange={handleChange}
              required
            >
              <option value="" disabled>
                Seleccioná una opción
              </option>
              <option value="reserva">Reserva de mesa</option>
              <option value="productos">Consulta sobre productos</option>
              <option value="evento">Organización de un evento</option>
              <option value="otro">Otro motivo</option>
            </select>
          </div>

          <fieldset className="form-group">
            <legend>¿Cómo preferís que te contactemos?</legend>
            <div className="radio-options">
              {[
                ["email", "Por email"],
                ["telefono", "Por teléfono"],
                ["whatsapp", "Por WhatsApp"],
              ].map(([value, label]) => (
                <label className="option-label" key={value}>
                  <input
                    type="radio"
                    name="preferenciaContacto"
                    value={value}
                    checked={formData.preferenciaContacto === value}
                    onChange={handleChange}
                    required
                  />
                  {label}
                </label>
              ))}
            </div>
          </fieldset>

          <div className="form-group">
            <label className="option-label">
              <input
                type="checkbox"
                name="novedades"
                checked={formData.novedades}
                onChange={handleChange}
              />
              Quiero recibir novedades y promociones
            </label>
          </div>

          <div className="form-group">
            <label htmlFor="comentarios">Comentarios</label>
            <textarea
              name="comentarios"
              id="comentarios"
              rows="6"
              value={formData.comentarios}
              onChange={handleChange}
              placeholder="Contanos cómo podemos ayudarte"
              required
            />
          </div>

          <div className="form-buttons">
            <button className="button button-primary" type="submit">
              <i className="fa-solid fa-paper-plane" aria-hidden="true" />
              Enviar
            </button>
            <button className="button button-reset" type="reset">
              <i className="fa-solid fa-eraser" aria-hidden="true" />
              Limpiar
            </button>
          </div>

          {message && (
            <p className="form-message" role="status">
              {message}
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
