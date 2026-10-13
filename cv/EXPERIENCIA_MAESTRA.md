# 📘 DOCUMENTO MAESTRO DE EXPERIENCIA LABORAL Y PROYECTOS TÉCNICOS
**Kevin Garrido | Ingeniero en Computación Inteligente**  
📍 Aguascalientes, México | 📞 (+52) 449-166-6954 | ✉️ kevingarrido711@gmail.com  
🔗 [LinkedIn](https://www.linkedin.com/in/kdgs7/) | 🐙 [GitHub](https://github.com/k3v-5) | 🌐 [Portafolio Web (kevingarrido.com)](https://kevingarrido.com)

---

## 🎯 PROPÓSITO DE ESTE DOCUMENTO
Este archivo es la **fuente de verdad exhaustiva** de toda la trayectoria técnica, laboral, operativa y académica de Kevin Garrido.

> **INSTRUCCIÓN PARA EL AGENTE DE IA (CUANDO EL USUARIO PEGUE UNA VACANTE):**
> 1. **Analiza el Job Description (JD):** Identifica el rol principal (Backend, Full-Stack, DevOps/Infraestructura, ERP/Logística, Telemetría/IoT, AI/LLMs, SysAdmin/Soporte), sus tecnologías requeridas, responsabilidades clave y palabras clave de filtrado ATS.
> 2. **Selecciona los logros con mayor impacto:** Elige entre 4 y 5 viñetas del banco de experiencia de este documento que mejor demuestren dominio de los requisitos pedidos, manteniendo siempre la redacción en primera persona presente para el puesto actual y verbos de acción medibles.
> 3. **Selecciona los proyectos técnicos más afines:** Escoge 2 proyectos de la sección de proyectos que respalden directamente el stack de la vacante.
> 4. **Arma el perfil `custom` en `cv/data.json`:** Ajusta el `title`, `summary`, `selected_projects` y la prioridad de `skills`.
> 5. **Compila el CV oficial de 1 página:** Ejecuta `python cv/build.py --profile custom --lang es` (o `--lang en` según el idioma de la vacante) para entregar el PDF listo para postulación.

---

## 🏢 1. EXPERIENCIA LABORAL DETALLADA

---

### 1.1 RAINDE
**Puesto:** Software & DevOps Engineer  
**Período:** Noviembre 2024 – Actualidad  
**Ubicación:** Aguascalientes, México  
**Modalidad:** Presencial / Híbrida  
**Giro:** Soluciones de Software Empresarial, Logística, Transporte de Carga y Cadena de Suministro  

#### A. Arquitectura ERP Core & Base de Datos (C# / .NET / ASP Clásico / SQL Server)
* **Desarrollo y Soporte de Módulos ERP:** Desarrollo integral desde cero, ampliación y soporte de corrección de errores (hotfixes/troubleshooting) en módulos centrales de la suite ERP empresarial de RAINDE.
* **Módulos Fiscales y Financieros:**
  * **Timbrado y Facturación Electrónica (CFDI):** Lógica transaccional de timbrado y emisión con Proveedores Autorizados de Certificación (PAC).
  * **Carta Porte:** Implementación de complementos de Carta Porte para transporte de carga federal y logística de mercancías bajo normativas oficiales.
  * **Cuentas por Pagar (CXP) y Proveedores:** Gestión de pagos, órdenes de compra, control de pasivos y conciliación con proveedores.
  * **Nómina:** Módulo de cálculo de percepciones, deducciones y dispersión de nómina operativa.
* **Módulos Operativos y Logísticos:**
  * **Inventarios y Almacenes:** Control multialmacén de entradas, salidas, transferencias y stock crítico.
  * **Seguimiento Logístico y Operaciones:** Trazabilidad de órdenes de viaje, estatus de entregas y monitoreo de despacho.
* **Base de Datos Relacional Avanzada (SQL Server):**
  * Diseño, depuración y mantenimiento de **Stored Procedures** de alta complejidad, **Vistas**, **Triggers** de consistencia de datos y transacciones ACID.
  * Optimización de consultas SQL (análisis de planes de ejecución, creación de índices, reducción de cuellos de botella).
* **Modernización de Sistemas Legacy:**
  * Mantenimiento correctivo y preventivo de módulos construidos históricamente en **ASP Clásico**.
  * Arquitectura y migración progresiva de lógica de negocio desde ASP Clásico hacia **.NET moderno (.NET Core / C#)** y servicios RESTful desacoplados.
* **Visualización de Datos y Reportes:**
  * Creación y parametrización de reportes operativos, financieros y de rendimiento con gráficas dinámicas para directores y gerentes de área.

#### B. Microservicios, Endpoints & Procesamiento EDI en TypeScript (Node.js)
* **Arquitectura de Microservicios:** Diseño, desarrollo e implementación de servicios ligeros e independientes construidos en **TypeScript / Node.js**.
* **Integración y Procesamiento de EDIs (Electronic Data Interchange):**
  * Parseo, validación, transformación y generación de mensajes de intercambio electrónico de datos para logística y transporte internacional.
  * Gestión de **Tenders logísticos** (ofertas de carga, confirmaciones de aceptación/rechazo, asignación de rutas).
  * Manejo de transacciones estándares y formatos B2B para integración automatizada con socios comerciales y clientes corporativos.
* **APIs RESTful y Webhooks:**
  * Construcción de endpoints seguros de alto rendimiento para recepción y envío de datos transaccionales en tiempo real.
  * Implementación de **Webhooks** bidireccionales con reintentos automáticos y tolerancia a fallos.
* **Seguridad, Autenticación y Auditoría:**
  * Esquemas de autenticación y autorización mediante **JWT (JSON Web Tokens)**, API Keys y roles de usuario.
  * Sistemas de trazabilidad, logging estructurado (Winston / Morgan / logs centralizados) y seguimiento de peticiones para auditoría operativa.
* **Web Scraping Automatizado:**
  * Desarrollo de scripts y bots en Node.js/TypeScript para extracción controlada de datos desde portales externos de validación vehicular, aduanal y logística.

#### C. Monitoreo Telemático & Rastreo GPS en Tiempo Real (Angular & Python)
* **Ingesta Telemática de GPS (Python):**
  * Desarrollo de listeners y servidores de sockets **TCP/UDP** en Python para recepción continua y concurrente de paquetes binarios y tramas crudas emitidas por dispositivos GPS/IoT.
  * Integración con APIs de proveedores de rastreo telemático para ingesta en streaming de telemetría.
  * Decodificación de tramas (coordenadas geográficas, velocidad, ignición, nivel de combustible, alertas de botón de pánico) y persistencia en base de datos.
* **Plataforma Web de Monitoreo y Rastreo (Angular):**
  * Construcción de aplicaciones web interactivas (SPA) en **Angular** y TypeScript para monitoreo de flotas en tiempo real.
  * Integración de mapas dinámicos (Leaflet / Google Maps API), renderizado de rutas históricas, cálculo de tiempos estimados de llegada (ETA), geocercas poligonales y alertas visuales instantáneas.

#### D. Despliegues Autónomos & Administración de Servidores (Linux & Windows IIS)
* **Infraestructura 100% Gestionada de Manera Autónoma (Self-Managed):** Kevin gestiona de forma directa, sin intermediarios, la publicación y operación de los sistemas en producción.
* **Servidores Linux (Ubuntu / Debian):**
  * Conexión remota segura mediante **SSH**.
  * Aprovisionamiento y orquestación de servicios en segundo plano con **systemd** (servicios, daemons) y administradores de procesos como **PM2**.
  * Configuración y administración de tareas programadas con **crontab** (crones automáticos para limpieza, respaldos y conciliaciones).
  * Configuración de servidores web y proxies inversos con **Nginx** (balanceo de carga local, headers de seguridad, certificados SSL con Let's Encrypt / Certbot, redirecciones y gestión de puertos).
  * Monitoreo de uso de CPU/RAM, inspección de logs del sistema (`journalctl`) y endurecimiento de seguridad básico (UFW / firewalls).
* **Servidores Windows con IIS (Internet Information Services):**
  * Configuración de sitios web, aplicaciones y directorios virtuales en **IIS**.
  * Administración de **Application Pools** (asignación de recursos, reciclaje de pools, versiones de CLR / .NET Core Hosting Bundle).
  * Configuración de bindings (HTTP/HTTPS, dominios, certificados SSL) y reglas de permisos de carpetas/usuarios de Windows.
  * Creación y despliegue de **Servicios de Windows (Windows Services)** para procesos residentes en memoria.
  * Programación de tareas administrativas con el Programador de Tareas (**Task Scheduler**).
* **Contenerización y Bases de Datos en Servidores:**
  * Uso de **Docker** y **Docker Compose** para aislamiento de microservicios y dependencias de ejecución.
  * Administración directa de instancias de bases de datos, ejecución de scripts de migración y respaldos programados en servidores de producción.

#### E. Inteligencia Artificial & Automatización con LLMs (TypeScript)
* **Integración de APIs de Modelos de Lenguaje:** Conexión de APIs de LLMs comerciales (OpenAI GPT-4, Anthropic Claude, Google Gemini) dentro de flujos de trabajo en TypeScript.
* **Casos de Uso Empresariales:**
  * Extracción y normalización automática de datos no estructurados a partir de facturas, correos, documentos de embarque y reportes escaneados.
  * Procesamiento inteligente de información operativa y clasificación de incidencias.
  * Pipelines de automatización donde LLMs actúan como agentes de decisión para enriquecer catálogos o validar coherencia de datos.

---

### 1.2 LION INTEL SOLUTIONS
**Puesto:** Fullstack Developer  
**Período:** Mayo 2024 – Noviembre 2024  
**Ubicación:** Aguascalientes, México  
**Modalidad:** Híbrida  
**Giro:** Soluciones Digitales, E-Commerce y Sector Salud  

#### A. Integración de APIs de E-Commerce (Mercado Libre, Amazon)
* **Sincronización Multicanal en Tiempo Real:** Integración directa de las APIs oficiales de **Mercado Libre** y **Amazon** con el backend empresarial (.NET / SQL Server).
* **Gestión Unificada de Inventarios y Catálogos:**
  * Sincronización automática de existencias y precios entre los marketplaces y la base de datos central, evitando ventas fuera de stock.
  * Mapeo de catálogos de productos, atributos, imágenes y especificaciones técnicas hacia los esquemas requeridos por cada plataforma de marketplace.
* **Procesamiento de Órdenes y Transacciones:**
  * Consumo de webhooks y endpoints de las plataformas para captura inmediata de órdenes de compra, generación de guías de envío y actualización de estados transaccionales.

#### B. Portal Médico Dermatológico & Plataforma Web (Vue.js + .NET)
* **Arquitectura Frontend:** Desarrollo de la interfaz web responsiva utilizando **Vue.js**, Vuex/Pinia y componentes interactivos para atención clínica y venta de productos dermatológicos.
* **Backend y APIs RESTful:** Desarrollo de endpoints y lógica de negocio en **ASP.NET / .NET**, estructurados bajo arquitectura en capas con Entity Framework Core.
* **Gestión Clínica y Administrativa:**
  * Módulo de expedientes de pacientes, historial de consultas, agenda de citas y recetas médicas.
  * Optimización de consultas SQL en SQL Server, reduciendo los tiempos de respuesta de consulta en un 35% y centralizando la administración de la clínica.

---

### 1.3 UNIVERSIDAD CUAUHTÉMOC
**Puesto:** Ingeniero de Infraestructura TI y Automatización  
**Período:** Mayo 2021 – Febrero 2023  
**Ubicación:** Aguascalientes, México  
**Modalidad:** Presencial  
**Giro:** Educación Superior y Administración Universitaria  

#### A. Desarrollo Interno y Sistemas de Automatización
* **Sistema Interno de Gestión de Tickets e Incidencias:**
  * Diseño, programación y despliegue de una plataforma web propia para registro, asignación, seguimiento y resolución de incidencias tecnológicas para más de 1,000 usuarios universitarios (docentes, estudiantes y personal administrativo).
  * Automatización de reportes periódicos de soporte, métricas de cumplimiento de SLA y reducción de tiempos de atención en un 40%.
* **Sistema de Control de Asistencia y Acceso Biométrico / RFID:**
  * Implementación y administración de lectores biométricos (huella digital) y lectores de tarjetas de proximidad (RFID) para registro de entradas y salidas de colaboradores y alumnos.
  * Sincronización de registros de checado con bases de datos administrativas internas.
* **Sistema de Credencialización Universitaria:**
  * Automatización de la emisión, captura de fotografía y codificación de credenciales digitales y físicas para el campus.

#### B. Redes, Telecomunicaciones y Servidores
* **Redes Corporativas y Conectividad del Campus:**
  * Configuración, segmentación y mantenimiento de redes mediante **VLANs**, switches administrables (Cisco / HP / TP-Link) y routers de borde.
  * Mantenimiento de cableado estructurado (Cat 6), racks de comunicaciones, patch panels y balanceo de enlaces de internet.
* **Telefonía IP (VoIP):**
  * Configuración y administración de extensiones telefónicas IP, conmutador digital, troncales SIP y mantenimiento de terminales VoIP en oficinas y directivos.
* **Servidores Linux y Servicios de Red:**
  * Configuración de servidores Linux para servicios locales de red (DNS, DHCP, compartición de archivos y hosting interno).

#### C. Infraestructura Física, Seguridad y Soporte a Usuarios
* **Seguridad Electrónica y Videovigilancia (CCTV):**
  * Instalación, configuración y monitoreo de cámaras de seguridad IP y análogas, DVRs/NVRs y esquemas de grabación perimetral.
* **Mantenimiento y Soporte de Hardware:**
  * Diagnóstico y mantenimiento correctivo/preventivo de equipo de cómputo (PCs, laptops), impresoras láser/térmicas, proyectores multimedia y pantallas interactivas en aulas y auditorios.
* **Atención y Soporte Técnico Integral:**
  * Soporte técnico presencial y remoto de primer y segundo nivel a usuarios, personal administrativo, directores y comunidad estudiantil.

---

### 1.4 FINANCIERA INDEPENDENCIA
**Puesto:** Ejecutivo Telefónico (Área de Virtuales / Medios Digitales de Pago)  
**Período:** Enero 2024 – Abril 2024  
**Ubicación:** Aguascalientes, México  
**Modalidad:** Presencial  
**Giro:** Sector Financiero, Microcréditos y Cobranza Especializada  

#### Funciones y Habilidades Clave:
* **Generación de Líneas de Pago en Tiempo Real:** Emisión y cálculo de referencias bancarias y líneas de captura para pago remoto (SPEI, tiendas de conveniencia, ventanillas) durante llamadas en vivo con cuentahabientes.
* **Gestión de Medios Digitales y Pagos Virtuales:** Asesoramiento sobre plataformas virtuales de pago, validación transaccional y confirmación de recepción de fondos.
* **Uso de Sistemas Financieros y CRM:** Navegación intensiva en sistemas bancarios internos, consulta de saldos, estados de cuenta, amortizaciones y registro detallado de bitácoras de llamada.
* **Habilidades Blandas e Interpersonales de Alto Rendimiento:**
  * Comunicación verbal asertiva, escucha activa y negociación bajo presión.
  * Manejo de objeciones y resolución inmediata de conflictos con clientes morosos o con incidencias en pagos no reflejados.
  * Apego estricto a políticas de seguridad de la información financiera y confidencialidad bancaria.

---

## 💻 2. PROYECTOS TÉCNICOS DESTACADOS (PORTAFOLIO & LAB)

### 2.1 CitasApp (Plataforma Full-Stack de Citas en Tiempo Real)
* **Stack:** ASP.NET Core Web API, Angular, SQL Server, SignalR / WebSockets, JWT, Entity Framework Core.
* **Logros:**
  * Arquitectura desacoplada cliente-servidor con autenticación robusta mediante tokens JWT y control granular de roles y sesiones de usuario.
  * Mensajería bidireccional instantánea con SignalR/WebSockets para chat en vivo y presencia de usuarios.
  * Optimización de esquemas relacionales en SQL Server con EF Core para consultas de alta concurrencia.
* **Repo:** `https://github.com/k3v-5/CitasApp`

### 2.2 Blender Asset Orchestration Engine (AOE)
* **Stack:** Python API, Model Context Protocol (MCP), Blender Headless, Procedural 3D, LLM Orchestration.
* **Logros:**
  * Motor generativo que conecta modelos de lenguaje con Blender a través de Model Context Protocol (MCP) para sintetizar escenas 3D procedurales y rigging automatizado.
  * Reducción de hasta un 80% en el consumo de tokens de contexto gracias a señales de control compactas y un pipeline de renderizado desatendido de 19 etapas.
* **Repo:** `https://github.com/k3v-5/AssetOrchestrationEngine`

### 2.3 After Effects MCP Video Engine (N8Effect)
* **Stack:** Adobe After Effects, Model Context Protocol (MCP), Node.js, Python, Token Optimization.
* **Logros:**
  * Puente de control autónomo para orquestar capas de video, animar keyframes, manipular cámaras y lanzar colas de render en segundo plano mediante comandos de IA compactos.
* **Repo:** `https://github.com/k3v-5/N8Effect`

### 2.4 AbletonEngine (Estudio de Música Algorítmica & DSP)
* **Stack:** Python, Ableton Live API, Audio DSP, Validación LUFS, Síntesis Estructural.
* **Logros:**
  * Generador autónomo de composiciones musicales algorítmicas con validación estricta de sonoridad estándar industrial (LUFS), balance espectral y consistencia armónica exportable directamente a proyectos DAW.
* **Repo:** `https://github.com/k3v-5/AbletonEngine`

### 2.5 LexiKit (Plataforma Educativa Adaptativa con IA)
* **Stack:** Next.js, React, TypeScript, LLM Prompt Chaining, Algoritmos de Repetición Espaciada.
* **Logros:**
  * Plataforma de aprendizaje de idiomas con generación dinámica de contenido contextual, flashcards interactivas y refuerzo de memoria a largo plazo mediante algoritmos de repetición espaciada.

### 2.6 Pipeline CI/CD & Despliegues Multiplataforma
* **Stack:** GitHub Actions, GitLab CI, Docker, Docker Compose, Linux (Ubuntu), Bash, Nginx.
* **Logros:**
  * Automatización del ciclo de vida de compilación, ejecución de suites de pruebas y empaquetado de artefactos web y móviles, reduciendo tiempos de despliegue en un 65%.

---

## 🎓 3. EDUCACIÓN Y FORMACIÓN
* **Grado:** Ingeniería en Computación Inteligente (B.S. Intelligent Computing Engineering)
* **Institución:** Universidad Autónoma de Aguascalientes (UAA)
* **Período:** Agosto 2019 – Junio 2024 (Graduado)
* **Enfoque Académico:** Inteligencia Artificial, Optimización Inteligente, Minería de Datos, Algoritmos Avanzados, Visión por Computadora, Redes Neuronales y Arquitectura de Software.
* **Idiomas:**
  * **Español:** Nativo.
  * **Inglés:** Profesional Avanzado (B2 / C1 - Lectura, escritura técnica, documentación y comunicación oral fluida).
* **Mérito Extracurricular:** Maratón Finisher (42.195 km) — Demuestra constancia, disciplina férrea, resistencia y mentalidad de alto rendimiento.

---

## 🗂️ 4. MATRIZ DE PERFILES Y RECOMENDACIÓN DE BULLETS POR VACANTE

Cuando el usuario presente una vacante, utiliza esta guía rápida para seleccionar qué destacar:

| Tipo de Vacante | Bullets a Elegir de RAINDE / Empleos | Proyectos a Incluir | Habilidades Clave en Top |
| :--- | :--- | :--- | :--- |
| **Backend .NET / C#** | Módulos ERP en C# (.NET), Facturación/Nómina/Inventarios, Stored Procedures SQL Server, Migración ASP a .NET. | `dating_app` + `devops_pipeline` | C#, .NET Core, ASP.NET Web API, SQL Server, Stored Procedures, EF Core. |
| **Backend TypeScript / Node.js** | Microservicios en TypeScript, APIs REST, Webhooks, EDIs/Tenders, Web Scraping, JWT. | `dating_app` + `blender_aoe` (o N8Effect) | TypeScript, Node.js, Microservicios, REST APIs, Webhooks, EDIs, SQL Server. |
| **Full-Stack (Angular / Vue + .NET)** | ERP en C# + Plataformas de Monitoreo en Angular + Portal médico e integraciones e-commerce en Vue.js (Lion Intel). | `dating_app` + `lexikit` | Angular, TypeScript, C#, .NET Core, Vue.js, SQL Server, RESTful APIs. |
| **DevOps / Infraestructura / SysAdmin** | Despliegues en servidores Linux (systemd, Nginx, PM2, SSH, crones) + Servidores IIS + Redes y servidores (Cuauhtémoc). | `devops_pipeline` + `blender_aoe` | Servidores Linux, Servidores IIS, Nginx, Docker, CI/CD, Bash, systemd, Redes/VLANs. |
| **Sistemas ERP, Logística & Integraciones** | ERP (Facturación, Carta Porte, Inventarios, CXP), EDIs (Tenders logísticos), APIs E-Commerce Mercado Libre/Amazon. | `dating_app` + `devops_pipeline` | Arquitectura ERP, Integraciones EDI, Tenders, Facturación/Carta Porte, C#, SQL Server, TypeScript. |
| **IoT, Telemetría & Monitoreo en Tiempo Real** | Recepción de tramas GPS en Python (sockets TCP/UDP) + Visualización de flotas en Angular con mapas interactivos y alertas. | `dating_app` + `ableton_engine` | Python (Sockets/GPS), Angular, Telemetría en Tiempo Real, SQL Server, WebSockets. |
| **AI Engineer / Automatización con LLMs** | Integración de APIs de LLMs en TypeScript + Orquestación MCP en Blender/After Effects + Scraping y automatización. | `blender_aoe` + `after_effects` (o LexiKit) | Model Context Protocol (MCP), APIs de LLMs (OpenAI/Gemini/Claude), Python, TypeScript, Agentes. |
| **Soporte TI / Infraestructura de Redes** | Redes VLANs, telefonía IP, CCTV, biometricos y soporte en Cuauhtémoc + Atención telefónica y CRM en Financiera Independencia. | `devops_pipeline` + `dating_app` | Redes (VLANs/Switches), Servidores Linux/Windows, Telefonía IP, Soporte Técnico, Atención al Cliente. |

---

## ⚙️ 5. CÓMO GENERAR EL PDF A LA MEDIDA CON cv/build.py
1. En `cv/data.json`, actualiza la clave `"custom"` dentro de `"profiles"` con los títulos, viñetas, proyectos y resumen ajustados a la vacante.
2. Ejecuta en la terminal:
   ```bash
   # En español:
   python cv/build.py --profile custom --lang es --output cv/dist/CV_Kevin_Garrido_Custom_ES.pdf

   # En inglés:
   python cv/build.py --profile custom --lang en --output cv/dist/CV_Kevin_Garrido_Custom_EN.pdf
   ```
3. El script compilará automáticamente un PDF vectorial limpio en exactamente 1 página sin desbordes.
