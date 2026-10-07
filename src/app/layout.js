import { Fira_Code, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

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
  metadataBase: new URL("https://kevingarrido.vercel.app"),
  title: {
    default: "Kevin Garrido // Ingeniero en Cómputo Inteligente",
    template: "%s | Kevin Garrido",
  },
  description:
    "Ingeniero en Cómputo Inteligente especializado en Arquitectura Full-Stack, DevOps, Orquestación de IA & MCP Engines y Sistemas Escalables.",
  keywords: [
    "Kevin Garrido",
    "Ingeniero en Cómputo Inteligente",
    "Full-Stack Developer",
    "DevOps",
    "CI/CD",
    "Docker",
    ".NET",
    "Angular",
    "Model Context Protocol",
    "MCP",
    "Inteligencia Artificial",
    "n8n",
    "Blender Python",
    "After Effects Engine",
  ],
  authors: [{ name: "Kevin Garrido" }],
  creator: "Kevin Garrido",
  openGraph: {
    title: "Kevin Garrido // Ingeniero en Cómputo Inteligente",
    description:
      "Arquitectura de motores de IA, pipelines generativos con MCP, gráficos 3D procedurales y sistemas web escalables.",
    url: "https://kevingarrido.vercel.app",
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
      "Arquitectura de motores de IA, pipelines generativos con MCP, gráficos 3D procedurales y sistemas web escalables.",
    images: ["/og-image.png"],
  },
};

const personJsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: "Kevin Garrido",
  jobTitle: "Ingeniero en Computación Inteligente",
  url: "https://kevingarrido.vercel.app",
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
    "Full-Stack Architecture",
    ".NET Core",
    "Angular",
    "SQL Server",
    "DevOps",
    "CI/CD",
    "Docker",
    "Model Context Protocol (MCP)",
    "Inteligencia Artificial"
  ]
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${firaCode.variable}`}>
      <head>
        <link rel="preconnect" href="https://i.scdn.co" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="https://i.scdn.co" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }}
        />
      </head>
      <body className={jakarta.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
