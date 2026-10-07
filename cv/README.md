# Sistema de Generación de CV Modular (Formato Oxford / ATS-Friendly)

Este sistema genera versiones vectoriales limpias en PDF de tu Curriculum Vitae en **formato Oxford**, garantizando:
- **1 sola página exacta**: Margins, espaciado y tipografía calibrados meticulosamente.
- **ATS-Friendly**: Texto nativo seleccionable, jerarquía estándar (Educación, Experiencia, Proyectos, Habilidades), sin tablas complejas ni barras de habilidades que confunden a los analizadores automáticos de RRHH.
- **Modular y orientado a vacantes**: Toda tu información está centralizada en `cv/data.json`, permitiendo generar al instante variantes según el perfil del puesto al que postulas.
- **Bilingüe**: Soporte nativo para Español (`ES`) e Inglés (`EN`).

---

## 🚀 Perfiles Disponibles

1. **`fullstack`**: Enfoque en desarrollo Frontend/Backend con Next.js, React, Node.js, Django, TypeScript y bases de datos. Incluye proyectos como Lion Intel y Plataforma Educativa Gamificada.
2. **`devops`**: Enfoque en arquitectura en la nube (AWS), Docker, CI/CD, Linux, automatización y monitoreo. Destaca experiencia en RAINDE y Cuauhtémoc.
3. **`ai`**: Enfoque en IA / Computación Inteligente, Visión Artificial (YOLO, OpenCV), NLP, PyTorch y Edge AI.
4. **`general`**: Perfil balanceado de Ingeniería en Computación Inteligente.

---

## 🛠️ Cómo Generar los PDFs

Desde la terminal en la raíz del proyecto, corre cualquiera de los siguientes comandos:

### Generar todas las combinaciones (8 PDFs en `cv/dist/`)
```bash
python cv/build.py
```

### Generar solo para una vacante específica
```bash
# Para vacante Full-Stack en Español:
python cv/build.py --profile fullstack --lang es

# Para vacante DevOps en Inglés:
python cv/build.py --profile devops --lang en

# Para vacante de IA en Español:
python cv/build.py --profile ai --lang es
```

### Generar y actualizar el CV descargable del Portafolio (`public/cv.pdf`)
```bash
python cv/build.py --publish
```

---

## 📝 Cómo Editar tu Información

Solo necesitas editar `cv/data.json`:
- **Datos Personales (`personal`)**: Teléfono, correo, LinkedIn, GitHub, ubicación.
- **Experiencia (`experience`)**: Empresas, puestos, fechas y viñetas (ES y EN).
- **Proyectos (`projects`)**: Título, tecnologías y logros clave con métricas.
- **Perfiles (`profiles`)**: Define el resumen profesional (`summary`) y qué proyectos se muestran para cada perfil (`selected_projects`).
- **Habilidades (`skills`)**: Lenguajes, frameworks, herramientas y metodologías ordenadas por relevancia para cada perfil.
