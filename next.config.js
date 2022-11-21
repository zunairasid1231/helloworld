/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    unoptimized: true,
  },
};

/**module.exports = nextConfig */
module.exports = {
  images: {
    unoptimized: true,
  },
  i18n: {
    locales: ['en-US', 'fr', 'es'],
    defaultLocale: 'en-US',
  },
};
