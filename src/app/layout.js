import { Fira_Code, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";
import { ThemeProvider } from "./theme/ThemeContext";

const firaCode = Fira_Code({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});
const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
});

export const metadata = {
  metadataBase: new URL("https://kevingarrido.com"),
  title: {
    default: "Kevin Garrido // Ingeniero en Cómputo Inteligente",
    template: "%s | Kevin Garrido",
  },
  description:
    "Ingeniero en Cómputo Inteligente especializado en Arquitectura Full-Stack, DevOps, Orquestación de IA & MCP Engines y Sistemas Escalables.",
  keywords: [
    "Kevin Garrido",
    "Ingeniero en Cómputo Inteligente",
    "Microservicios",
    "TypeScript",
    "C#",
    ".NET",
    "Angular",
    "ERP",
    "EDI",
    "Telemetría GPS",
    "Software de Monitoreo",
    "Servidores Linux",
    "Servidores IIS",
    "APIs de LLMs",
    "Full-Stack Developer",
    "DevOps",
    "CI/CD",
    "Docker",
    "Model Context Protocol",
    "MCP",
    "Inteligencia Artificial",
    "Blender Python",
    "After Effects Engine",
  ],
  authors: [{ name: "Kevin Garrido" }],
  creator: "Kevin Garrido",
  openGraph: {
    title: "Kevin Garrido // Ingeniero en Cómputo Inteligente",
    description:
      "Arquitectura de microservicios, ERP, telemetría telemática GPS, servidores Linux/IIS y motores de IA con MCP.",
    url: "https://kevingarrido.com",
    siteName: "Kevin Garrido Portfolio",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Kevin Garrido - Intelligent Computing Engineer",
      },
    ],
    locale: "es_MX",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kevin Garrido // Ingeniero en Cómputo Inteligente",
    description:
      "Arquitectura de microservicios, ERP, telemetría telemática GPS, servidores Linux/IIS y motores de IA con MCP.",
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Garrido",
  jobTitle: "Ingeniero en Computación Inteligente",
  url: "https://kevingarrido.com",
  sameAs: [
    "https://www.linkedin.com/in/kdgs7/",
    "https://github.com/k3v-5"
  ],
  worksFor: {
    "@type": "Organization",
    name: "RAINDE"
  },
  alumniOf: {
    "@type": "EducationalOrganization",
    name: "Universidad Autónoma de Aguascalientes"
  },
  knowsAbout: [
    "Microservicios en TypeScript",
    "Enterprise ERP Systems (C# / .NET)",
    "Integraciones EDI",
    "Telemetría GPS y Software de Monitoreo",
    "Servidores Linux y Windows IIS",
    "Integración de APIs de LLMs",
    "Angular",
    "SQL Server",
    "DevOps & CI/CD",
    "Docker",
    "Model Context Protocol (MCP)",
    "Inteligencia Artificial"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${firaCode.variable}`} suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://i.scdn.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.scdn.co" />
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var s=localStorage.getItem('portfolio-theme');if(s==='dark'||(!s&&window.matchMedia('(prefers-color-scheme: dark)').matches)){document.documentElement.classList.add('dark');}else{document.documentElement.classList.remove('dark');}}catch(e){}})();`,
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={jakarta.className}>
        <ThemeProvider>
          <LanguageProvider>{children}</LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
