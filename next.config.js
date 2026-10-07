/** @type {import('next').NextConfig} */
const nextConfig = {
  // Compresión gzip/brotli automática para todos los recursos servidos
  compress: true,

  // Minificación ultra-rápida y eficiente basada en SWC
  swcMinify: true,

  // Elimina la cabecera x-powered-by para reducir overhead por petición y mejorar seguridad
  poweredByHeader: false,

  // Optimización de imágenes en producción (AVIF y WebP con caché persistente)
  images: {
    formats: ["image/avif", "image/webp"],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 días de caché para imágenes optimizadas
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

  // Cabeceras HTTP de caché inmutable para recursos estáticos pesados
  async headers() {
    return [
      {
        source: "/:all*(svg|jpg|jpeg|png|webp|avif|ico|mp3|pdf|woff2)",
        headers: [
          {
            key: "Cache-Control",
            value: "public, max-age=31536000, immutable",
          },
        ],
      },
    ];
  },
};

module.exports = nextConfig;
