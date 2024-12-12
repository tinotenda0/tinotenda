/** @type {import('next').NextConfig} */
const nextConfig = {
   experimental: {
      appDir: true,
   },
   // image optimization
   images: {
      domains: ['placehold.it'],
   },

   // strict mode for compilation the @metablog/ui package
   reactStrictMode: true,
   transpilePackages: ['@metablog/ui'],
}

module.exports = nextConfig
