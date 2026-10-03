import brunchImage from "../assets/images/brunch.jpg";
import coffeeImage from "../assets/images/cafe-especialidad.jpg";
import gallery1 from "../assets/images/galeria-1.jpg";
import gallery2 from "../assets/images/galeria-2.jpg";
import gallery3 from "../assets/images/galeria-3.jpg";
import gallery4 from "../assets/images/galeria-4.jpg";
import gallery5 from "../assets/images/galeria-5.jpg";
import gallery6 from "../assets/images/galeria-6.jpg";
import gallery7 from "../assets/images/galeria-7.jpg";
import gallery8 from "../assets/images/galeria-8.jpg";
import pastryImage from "../assets/images/pasteleria.jpg";
import Cards from "../components/Cards";
import Contact from "../components/Contact";
import Gallery from "../components/Gallery";
import Hero from "../components/Hero";

const products = [
  {
    image: coffeeImage,
    alt: "Taza de café de especialidad con latte art",
    icon: "fa-solid fa-mug-hot",
    title: "Café de Especialidad",
    description:
      "Un café de especialidad, preparado con granos de origen único y técnicas de tostado que resaltan sus sabores naturales.",
    link: "#contacto",
    linkText: "Consultar variedades",
  },
  {
    image: pastryImage,
    alt: "Croissants y piezas de pastelería artesanal",
    icon: "fa-solid fa-cookie-bite",
    title: "Pastelería Artesanal",
    description:
      "Cookies, croissants, budines y tortas elaborados diariamente con ingredientes frescos.",
    link: "#galeria",
    linkText: "Ver productos",
  },
  {
    image: brunchImage,
    alt: "Mesa con opciones dulces y saladas de brunch",
    icon: "fa-solid fa-utensils",
    title: "Brunch",
    description:
      "Opciones dulces y saladas para disfrutar durante la mañana, el mediodía o una tarde especial.",
    link: "#contacto",
    linkText: "Reservar una mesa",
  },
];

const galleryImages = [
  { src: gallery1, alt: "Capuccino con diseño de latte art", caption: "Café preparado al momento" },
  { src: gallery2, alt: "Cookie artesanal con chips de chocolate", caption: "Cookies recién horneadas" },
  { src: gallery3, alt: "Croissants artesanales sobre una bandeja", caption: "Croissants artesanales" },
  { src: gallery4, alt: "Tostadas y café servidos para un brunch", caption: "Opciones de brunch" },
  { src: gallery5, alt: "Barra interior de Miga & Coffee", caption: "Nuestra barra" },
  { src: gallery6, alt: "Porción de torta artesanal decorada", caption: "Tortas para compartir" },
  { src: gallery7, alt: "Vaso de café para llevar", caption: "Café para llevar" },
  { src: gallery8, alt: "Mesa de cafetería preparada para recibir clientes", caption: "Momentos para disfrutar" },
];

function Home() {
  return (
    <main className="page-content">
      <Hero />
      <Cards products={products} />
      <Gallery images={galleryImages} />
      <Contact />
    </main>
  );
}

export default Home;
