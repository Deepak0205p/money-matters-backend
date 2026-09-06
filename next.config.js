/** @type {import('next').NextConfig} */
const nextConfig = {

  typescript: {
    ignoreBuildErrors: true,
  },

  productionBrowserSourceMaps: false,

  staticPageGenerationTimeout: 120,

  reactStrictMode: false,

  poweredByHeader: false,

  compress: true,

  experimental: {
    cpus: 1,
    optimizePackageImports: ['lucide-react', 'framer-motion', 'recharts', 'date-fns'],
  },

  images: {
    formats: ['image/avif', 'image/webp'],
    minimumCacheTTL: 60 * 60 * 24 * 30,
  },

  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          { key: 'X-Content-Type-Options', value: 'nosniff' },
          { key: 'X-Frame-Options', value: 'DENY' },
          { key: 'X-XSS-Protection', value: '1; mode=block' },
          { key: 'Referrer-Policy', value: 'strict-origin-when-cross-origin' },
          { key: 'Permissions-Policy', value: 'camera=(), microphone=(), geolocation=(), browsing-topics=()' },
          { key: 'Strict-Transport-Security', value: 'max-age=63072000; includeSubDomains; preload' },
        ],
      },
      {
        source: '/api/(.*)',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate' },
          { key: 'Pragma', value: 'no-cache' },
        ],
      },
    ];
  },

  turbopack: {},

  webpack: (config, { isServer }) => {
    config.watchOptions = {
      ignored: ['**/node_modules', '**/.git', '**/build', '**/dist', '**/.next'],
    };
    // Optimize memory during production build
    if (!isServer) {
      config.cache = false;
    }
    return config;
  },
};

export default nextConfig;
