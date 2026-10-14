/**
 * Catálogo central de proyectos del portafolio.
 * Desacoplado de la vista UI para cumplir con el principio de Responsabilidad Única (SRP)
 * y Abierto/Cerrado (OCP).
 */

/**
 * @typedef {Object} ProjectItem
 * @property {number} id - Identificador numérico único del proyecto
 * @property {string} image - Ruta del recurso visual principal
 * @property {string[]} tagIds - Categorías de filtrado asignadas
 * @property {string|null} gitUrl - Enlace al repositorio GitHub o null
 * @property {string|null} previewUrl - Enlace a demo en vivo o null
 * @property {string} [audioDemo] - Enlace a demostración de audio
 * @property {"cover"|"contain"} [fit] - Ajuste de la imagen en tarjeta
 */

export const PROJECTS_DATA = [
  {
    id: 8,
    image: "/images/projects/ianimation/principal.webp",
    tagIds: ["all", "ai", "gameDev"],
    gitUrl: "https://github.com/k3v-5/IANIMATION",
    previewUrl: null,
    fit: "cover",
  },
  {
    id: 0,
    image: "/images/projects/darx/principal.webp",
    tagIds: ["all", "gameDev", "ai"],
    gitUrl: null,
    previewUrl: null,
    fit: "contain",
  },
  {
    id: 7,
    image: "/images/projects/ableton-engine/principal.webp",
    tagIds: ["all", "ai", "audioDev"],
    gitUrl: "https://github.com/k3v-5/AbletonEngine",
    previewUrl: null,
    audioDemo: "/audio/ableton-engine-demo.mp3",
    fit: "contain",
  },
  {
    id: 6,
    image: "/images/projects/n8effect/principal.webp",
    tagIds: ["all", "audioDev", "gameDev"],
    gitUrl: null,
    previewUrl: null,
    audioDemo: "/audio/n8effect-demo.mp3",
    fit: "contain",
  },
  {
    id: 5,
    image: "/images/projects/lexikit/principal.webp",
    tagIds: ["all", "ai", "fullstack"],
    gitUrl: "https://github.com/k3v-5/LexiKit",
    previewUrl: null,
  },
  {
    id: 1,
    image: "/images/projects/dating-app/principal.webp",
    tagIds: ["all", "fullstack"],
    gitUrl: "https://github.com/k3v-5/CitasApp",
    previewUrl: "https://github.com/k3v-5/CitasApp",
  },
];

export const PROJECT_FILTER_IDS = ["all", "fullstack", "ai", "gameDev", "audioDev"];

/**
 * Filtra los proyectos según el tag seleccionado.
 * @param {string} tagId
 * @returns {ProjectItem[]}
 */
export function getProjectsByTag(tagId = "all") {
  if (!tagId || tagId === "all") return PROJECTS_DATA;
  return PROJECTS_DATA.filter((project) => project.tagIds.includes(tagId));
}

/**
 * Obtiene un proyecto por su ID único.
 * @param {number} id
 * @returns {ProjectItem|undefined}
 */
export function getProjectById(id) {
  return PROJECTS_DATA.find((project) => project.id === id);
}
