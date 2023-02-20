/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    appDir: true
  },
  images: {
    domains: ['flowbite.com', 'res.cloudinary.com']
  },
  reactStrictMode: true,
  swcMinify: true
};

module.exports = nextConfig;
