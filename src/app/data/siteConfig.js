/**
 * Configuración global del sitio y constantes de identidad.
 * Centraliza URLs, metadatos, redes y puntos de contacto bajo el principio SRP.
 */
export const siteConfig = {
  author: {
    name: "Kevin Garrido",
    shortName: "Kevin",
    title: "Ingeniero en Cómputo Inteligente // Intelligent Computing Engineer",
    email: "kevingarrido711@gmail.com",
    github: "https://github.com/k3v-5",
    linkedin: "https://www.linkedin.com/in/kdgs7/",
    location: "Aguascalientes, México",
  },
  siteUrl: "https://kevingarrido.com",
  navItems: [
    { href: "#about-me", key: "bio" },
    { href: "#experience", key: "exp" },
    { href: "#skills", key: "skills" },
    { href: "#projects", key: "projects" },
  ],
  cv: {
    pdfEs: "/cv.pdf",
    pdfEn: "/cv-en.pdf",
    downloadNameEs: "Kevin_Garrido_CV.pdf",
    downloadNameEn: "Kevin_Garrido_CV_EN.pdf",
  },
};
