/** @type {import('next').NextConfig} */
const nextConfig = {
   // image optimization
   images: {
      domains: [
         'placehold.it',
         'api-metablog.jstemplate.net',
         'secure.gravatar.com',
         'metablog-api.jstemplate.net',
         'tinotenda.co.uk',
         'tinotenda.co',
      ],
   },

   // strict mode for compilation the @metablog/ui package
   reactStrictMode: true,
   transpilePackages: ['@metablog/ui'],
}

module.exports = nextConfig
