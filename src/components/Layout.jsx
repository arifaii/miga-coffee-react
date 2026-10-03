import Footer from "./Footer";
import Navbar from "./Navbar";

const navigationLinks = [
  { label: "Inicio", url: "/#inicio" },
  { label: "Productos", url: "/#productos" },
  { label: "Galería", url: "/#galeria" },
  { label: "Contacto", url: "/#contacto" },
];

const socialLinks = [
  {
    label: "Instagram de Miga & Coffee",
    url: "https://www.instagram.com",
    icon: "fa-brands fa-instagram",
  },
  {
    label: "Facebook de Miga & Coffee",
    url: "https://www.facebook.com",
    icon: "fa-brands fa-facebook",
  },
  {
    label: "TikTok de Miga & Coffee",
    url: "https://www.tiktok.com",
    icon: "fa-brands fa-tiktok",
  },
];

function Layout({ children }) {
  return (
    <>
      <Navbar brand="Miga & Coffee" links={navigationLinks} />
      {children}
      <Footer
        brand="Miga & Coffee"
        description="Café de especialidad y sabores artesanales."
        socialLinks={socialLinks}
      />
    </>
  );
}

export default Layout;
