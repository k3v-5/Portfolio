/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compresión gzip/brotli automática para todos los recursos servidos
  compress: true,

  // Minificación ultra-rápida y eficiente basada en SWC
  swcMinify: true,

  // Elimina la cabecera x-powered-by para reducir overhead por petición y mejorar seguridad
  poweredByHeader: false,

  // Optimización de imágenes en producción (AVIF y WebP)
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 3600, // 1 hora para reflejar actualizaciones de imágenes sin caché obsoleto
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },

  // Limpieza de console.log en compilación de producción para menor peso de bundle
  compiler: {
    removeConsole:
      process.env.NODE_ENV === "production"
        ? { exclude: ["error", "warn"] }
        : false,
  },

  // Cabeceras HTTP de caché: inmutable solo para fuentes; revalidación por ETag para medios y PDFs
  // (evita que Cloudflare/navegadores congelen 404s o versiones antiguas de CV/demos durante 1 año)
  async headers() {
    return [
      {
        source: "/:all*(woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|mp3|mp4|pdf)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=0, must-revalidate",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
