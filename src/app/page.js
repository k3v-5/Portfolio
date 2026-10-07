"use client";
import { useRef, useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Navbar from "./components/Navbar";
import Herosection from "./components/Herosection";
import AboutSection from "./components/AboutSection";
import ExperienceSection from "./components/ExperienceSection";
import SkillsSection from "./components/SkillsSection";
import SectionVisual from "./components/SectionVisual";
import { useLanguage } from "./i18n/LanguageContext";
import { useScrollAnimations } from "./hooks/useScrollAnimations";

// Carga diferida no bloqueante de efectos y componentes periféricos
const MatrixBackground = dynamic(
  () => import("./components/MatrixBackground"),
  { ssr: false }
);
const CustomCursor = dynamic(
  () => import("./components/CustomCursor"),
  { ssr: false }
);
const LabSection = dynamic(
  () => import("./components/LabSection"),
  { loading: () => <div className="min-h-[400px]" /> }
);
const ProjectsSection = dynamic(
  () => import("./components/ProjectsSection"),
  { loading: () => <div className="min-h-[600px]" /> }
);
const SignalLogSection = dynamic(
  () => import("./components/SignalLogSection"),
  {
    ssr: false,
    loading: () => <div className="min-h-[120px]" />,
  }
);
const ContactSection = dynamic(
  () => import("./components/ContactSection"),
  { loading: () => <div className="min-h-[300px]" /> }
);
const CvModal = dynamic(
  () => import("./components/cv/CvModal"),
  { ssr: false }
);

export default function Home() {
  const { t } = useLanguage();
  const containerRef = useRef(null);
  const [isCvOpen, setIsCvOpen] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash === "#cv") {
      setIsCvOpen(true);
    }
    const handleHashChange = () => {
      if (window.location.hash === "#cv") {
        setIsCvOpen(true);
      }
    };
    window.addEventListener("hashchange", handleHashChange);
    return () => window.removeEventListener("hashchange", handleHashChange);
  }, []);

  useScrollAnimations({
    containerRef,
    revealCards: true,
    scrub: 0.65,
  });

  return (
    <div ref={containerRef}>
      <MatrixBackground />
      <CustomCursor />
      <Navbar onOpenCv={() => setIsCvOpen(true)} />
      {isCvOpen && <CvModal isOpen={isCvOpen} onClose={() => setIsCvOpen(false)} />}

      <div className="scroll-container pb-24 lg:pb-32">
        {/* Línea SVG de fondo fluida y sincronizada con el recorrido de todas las secciones */}
        <div className="svg-line-container">
          <svg
            viewBox="0 0 2120 10000"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ width: "100%", height: "100%" }}
          >
            <path
              id="scroll-path"
              d="M 699 0 C 699 248, 1950 303, 1950 550 C 1950 910, 1980 990, 1980 1350 C 1980 1710, 140 1790, 140 2150 C 140 2510, 1980 2590, 1980 2950 C 1980 3265, 1350 3335, 1350 3650 C 1350 3988, 200 4063, 200 4400 C 200 4738, 1920 4813, 1920 5150 C 1920 5510, 180 5590, 180 5950 C 180 6355, 1940 6445, 1940 6850 C 1940 7210, 900 7290, 900 7650 C 900 8010, 1950 8090, 1950 8450 C 1950 8788, 250 8863, 250 9200 C 250 9425, 1060 9475, 1060 9700 C 1060 9835, 1060 9865, 1060 10000"
              stroke="#c084fc"
              strokeWidth="32"
              vectorEffect="non-scaling-stroke"
            />
          </svg>
        </div>

        <Herosection onOpenCv={() => setIsCvOpen(true)} />
        <AboutSection />
        <ExperienceSection onOpenCv={() => setIsCvOpen(true)} />
        <SkillsSection />

        {/* The Creative Synthesis: Hito visual autónomo entre Skills y Lab */}
        <SectionVisual
          src="/images/img_creative_synthesis_wb.webp"
          alt="The Creative Synthesis"
          standalone
          direction="center"
        />

        <LabSection />

        {/* Server Towers: Hito visual autónomo entre Lab y Projects */}
        <SectionVisual
          src="/images/img_3wb.webp"
          alt="Server Towers"
          standalone
          direction="center"
        />

        <ProjectsSection />

        {/* The Deep Transmission: Hito visual autónomo entre Projects y Signal Log */}
        <SectionVisual
          src="/images/img_deep_transmission_wb.webp"
          alt="The Deep Transmission"
          standalone
          direction="center"
        />

        <SignalLogSection />

        {/* Neural Core: Hito visual autónomo entre Signal Log y Contact */}
        <SectionVisual
          src="/images/img_4wb.webp"
          alt="Neural Core"
          standalone
          direction="center"
        />

        <ContactSection />

        <footer className="py-16 text-center opacity-30 font-mono text-[9px] uppercase tracking-[0.8em]">
          {t.footer}
        </footer>
      </div>
    </div>
  );
}
