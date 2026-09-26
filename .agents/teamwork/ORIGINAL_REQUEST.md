# Original User Request

## 2026-09-26T15:21:54Z

This is a single self-contained fix; keep it small and focused.

Refactor the Next.js portfolio codebase to adhere strictly to SOLID principles and frontend clean architecture, decoupling presentation from business logic, data fetching, and animation control without altering visual appearance or functionality.

Working directory: d:/Proyectos/TEST/Portfolio-main
Integrity mode: development

## Requirements

### R1. Single Responsibility Principle (SRP) via Custom Hooks & Services
Extract all side-effects, GSAP animation setups, Lenis smooth-scroll lifecycle, Strava/Spotify API polling, and Markdown parsing out of UI components into dedicated custom hooks (e.g., `useScrollAnimations`, `useSpotifyTrack`, `useStravaActivity`, `useSignalLogs`) and service utilities. UI components must only be responsible for rendering and presentation.

### R2. Open/Closed & Dependency Inversion Principles (OCP & DIP)
Decouple external integrations and data providers so that presentation components depend on high-level contracts/abstractions rather than low-level fetch implementations, timing intervals, or environment-dependent API calls.

### R3. Component Modularization & Interface Segregation (ISP)
Refactor oversized section components (such as `SignalLogSection` and `ContactSection`) into focused, cohesive sub-components. Ensure each component accepts only the specific props it requires to display its state.

### R4. Zero Functional, Visual, and Performance Regression
Retain 100% feature parity:
- Lenis smooth scroll and SVG line tracking
- Custom cursor and Matrix background canvas
- GSAP card reveal triggers and floating 3D section visuals
- Bilingual localization (EN/ES) via `LanguageContext`
- Responsive layout across desktop, tablet, and mobile

## Acceptance Criteria

### Build & Static Verification
- [ ] `npm run build` completes successfully with zero errors and zero ESLint warnings.
- [ ] No circular dependencies or memory leaks; all hooks properly clean up listeners, intervals, and GSAP contexts on unmount.

### Architecture & SOLID Compliance
- [ ] Presentation components (`page.js`, `Herosection`, `AboutSection`, `ExperienceSection`, `SkillsSection`, `LabSection`, `ProjectsSection`, `SignalLogSection`, `ContactSection`) contain zero direct `fetch` calls or uncontained animation side-effects.
- [ ] Services and custom hooks are isolated in modular folders (e.g., `src/app/hooks/` and `src/app/services/` or `src/lib/`).

### Behavioral Verification
- [ ] The home page (`/`), privacy page (`/privacy`), and API endpoints (`/api/spotify`, `/api/strava`) respond with identical behavior and layout.
- [ ] Language switching (ES <-> EN) seamlessly updates all text across all components.
