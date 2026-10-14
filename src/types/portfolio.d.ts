/**
 * Contratos de tipos y definiciones para el Portafolio de Kevin Garrido.
 * Define la estructura de datos para asegurar el principio de segregación de interfaces
 * y facilitar el tipado estático en IDEs y herramientas de análisis.
 */

export type Language = "en" | "es";

export interface AuthorProfile {
  name: string;
  shortName: string;
  role: {
    en: string;
    es: string;
  };
  email: string;
  phone: string;
  location: string;
  education: {
    degree: {
      en: string;
      es: string;
    };
    institution: string;
    period: string;
  };
}

export interface SiteSocialLinks {
  github: string;
  linkedin: string;
  spotifyPlaylist: string;
}

export interface SiteConfig {
  author: AuthorProfile;
  social: SiteSocialLinks;
  app: {
    domain: string;
    repository: string;
    currentYear: number;
    defaultLocale: Language;
  };
}

export type ProjectFilterTag = "all" | "fullstack" | "ai" | "gameDev" | "audioDev";

export interface ProjectItem {
  id: number;
  title: string;
  description: string;
  image: string;
  tags: string[];
  filterTag: ProjectFilterTag;
  badge?: string;
  featured?: boolean;
  audioDemoLabel?: string;
  audioSrc?: string;
  audioFallbackNote?: string;
  gitUrl?: string;
  previewUrl?: string;
  hasAudioDemo?: boolean;
  videoSrc?: string;
}

export interface JobExperience {
  company: string;
  roleDates: string;
  bullets: string[];
}

export interface SkillCategory {
  title: string;
  items: string[];
}

export interface LabItem {
  id: string;
  name: string;
  tagline: string;
  blurb: string;
  highlights: string[];
  tags: string[];
  image: string;
  gitUrl?: string;
}

export interface SpotifyTrackState {
  isPlaying: boolean;
  title: string;
  artist: string;
  album: string;
  albumImageUrl: string;
  songUrl: string;
  playedAt?: string;
}

export interface StravaActivityState {
  name: string;
  distanceKm: string;
  movingTime: string;
  averageSpeedKmh: string;
  elevationGainM: number;
  startDate: string;
  activityUrl: string;
  type: string;
  isAvailable: boolean;
}

export interface ApiResponse<T = any> {
  ok: boolean;
  status: number;
  data: T | null;
  error?: string | null;
}
