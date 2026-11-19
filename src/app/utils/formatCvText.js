/**
 * Formats the structured CV data into clean, localized ATS-friendly plain text.
 * Matches the section order rendered in OxfordCvView and the official PDFs:
 * Summary -> Professional Experience -> Selected Projects -> Education -> Technical Skills.
 *
 * @param {object} cvData
 * @param {"es"|"en"} lang
 * @param {string} [profile="fullstack"]
 * @returns {string}
 */
export function formatCvPlainText(cvData, lang = "es", profile = "fullstack") {
  const isEn = lang === "en";
  const pData = cvData.profiles[profile] || cvData.profiles.general;
  const personal = cvData.personal;
  const edu = cvData.education;

  const selectedProjects = (pData.selected_projects || [])
    .map((k) => cvData.projects[k])
    .filter(Boolean);

  const skillsPriority = pData.skills_priority || ["fullstack", "devops", "ai", "tools"];

  const headers = isEn
    ? {
        summary: "SUMMARY",
        experience: "PROFESSIONAL EXPERIENCE",
        projects: "SELECTED PROJECTS",
        education: "EDUCATION",
        skills: "TECHNICAL SKILLS",
      }
    : {
        summary: "RESUMEN PROFESIONAL",
        experience: "EXPERIENCIA PROFESIONAL",
        projects: "PROYECTOS TÉCNICOS DESTACADOS",
        education: "EDUCACIÓN",
        skills: "HABILIDADES TÉCNICAS",
      };

  let text = `${personal.name.toUpperCase()}\n`;
  text += `${personal.location} | ${personal.phone} | ${personal.email}\n`;
  text += `LinkedIn: ${personal.linkedin.url} | GitHub: ${personal.github.url} | Web: ${personal.portfolio?.url}\n\n`;

  text += `${headers.summary}\n${pData[`title_${lang}`]}: ${pData[`summary_${lang}`]}\n\n`;

  text += `${headers.experience}\n`;
  cvData.experience.forEach((job) => {
    text += `• ${job.company} (${job.location}) - ${job[`role_${lang}`]} [${job[`dates_${lang}`]}]\n`;
    job[`bullets_${lang}`].forEach((b) => {
      text += `   - ${b}\n`;
    });
    text += `\n`;
  });

  text += `${headers.projects}\n`;
  selectedProjects.forEach((p) => {
    text += `• ${p[`title_${lang}`]} [${p.tech}]\n`;
    p[`bullets_${lang}`].forEach((b) => {
      text += `   - ${b}\n`;
    });
    text += `\n`;
  });

  text += `${headers.education}\n${edu[`school_${lang}`]} - ${edu.location}\n`;
  text += `${edu[`degree_${lang}`]} (${edu[`dates_${lang}`]})\n`;
  text += `${edu[`focus_${lang}`]}\n\n`;

  text += `${headers.skills}\n`;
  skillsPriority.forEach((sKey) => {
    const g = cvData.skills[sKey];
    if (g) {
      const itemsStr =
        g[`items_${lang}`] || (Array.isArray(g.items) ? g.items.join(", ") : g.items);
      text += `• ${g[`label_${lang}`]}: ${itemsStr}\n`;
    }
  });

  return text;
}
