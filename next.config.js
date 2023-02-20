/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['purr.objects-us-east-1.dream.io'],
    loader: 'akamai',
    path: '/',
  },
};

module.exports = nextConfig;
