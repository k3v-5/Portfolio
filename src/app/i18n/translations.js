// Diccionario central de textos EN/ES modularizado por dominios (SOLID / SRP).
// Las claves con "//" son etiquetas de estilo "terminal" (MODULE_XX, PROCESS_ID, etc.)
// que se mantienen en inglés en ambos idiomas a propósito — son parte de la estética
// del sitio, no contenido a traducir.

import {
  commonTranslations,
  languageMeta,
  aboutTranslations,
  experienceTranslations,
  skillsTranslations,
  projectsTranslations,
  signalLogTranslations,
} from "./modules/index.js";

export const translations = {
  en: {
    nav: commonTranslations.en.nav,
    hero: commonTranslations.en.hero,
    about: aboutTranslations.en,
    experience: experienceTranslations.en,
    skills: skillsTranslations.en,
    projects: projectsTranslations.en,
    signalLog: signalLogTranslations.en,
    contact: commonTranslations.en.contact,
    cvModal: commonTranslations.en.cvModal,
    privacy: commonTranslations.en.privacy,
    footer: commonTranslations.en.footer,
  },
  es: {
    nav: commonTranslations.es.nav,
    hero: commonTranslations.es.hero,
    about: aboutTranslations.es,
    experience: experienceTranslations.es,
    skills: skillsTranslations.es,
    projects: projectsTranslations.es,
    signalLog: signalLogTranslations.es,
    contact: commonTranslations.es.contact,
    cvModal: commonTranslations.es.cvModal,
    privacy: commonTranslations.es.privacy,
    footer: commonTranslations.es.footer,
  },
};

export { languageMeta };
