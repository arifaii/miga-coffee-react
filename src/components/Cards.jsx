import ProductCard from "./ProductCard";
import SectionHeading from "./SectionHeading";

function Cards({ products }) {
  return (
    <section id="productos" className="section products-section">
      <SectionHeading
        label="Nuestros productos"
        title="Sabores preparados con dedicación"
        description="Descubrí nuestra selección de cafés de especialidad, pastelería artesanal y opciones de brunch, cada uno elaborado con ingredientes frescos y técnicas cuidadosas para ofrecerte una experiencia única en cada bocado y sorbo."
      />

      <div className="cards-container">
        {products.map((product) => (
          <ProductCard key={product.title} {...product} />
        ))}
      </div>
    </section>
  );
}

export default Cards;
