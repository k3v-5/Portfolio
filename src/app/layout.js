import { Fira_Code, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { LanguageProvider } from "./i18n/LanguageContext";

const firaCode = Fira_Code({ subsets: ["latin"], variable: "--font-mono" });
const jakarta = Plus_Jakarta_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "Portfolio - Kevin Garrido",
  description: "Intelligent Computing Engineer | Fullstack & Data Science",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es" className={`${firaCode.variable}`}>
      <body className={jakarta.className}>
        <LanguageProvider>{children}</LanguageProvider>
      </body>
    </html>
  );
}
