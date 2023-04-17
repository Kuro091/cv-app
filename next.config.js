/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['purr.objects-us-east-1.dream.io', 'picsum.photos'],
    loader: 'default',
    path: '/',
    unoptimized: true
  },
};

module.exports = nextConfig;
