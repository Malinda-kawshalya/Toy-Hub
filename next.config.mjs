/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true, // Required for static export
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
  },
  output: 'export',  // Generates static HTML/CSS/JS files
  distDir: 'out',    // Output directory for the build
  
  // Performance optimizations
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  
  // Optimize bundle
  experimental: {
    optimizePackageImports: ['framer-motion', '@radix-ui/react-icons'],
  },
}

export default nextConfig
