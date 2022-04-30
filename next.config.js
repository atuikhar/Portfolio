/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
};

module.exports = nextConfig;

module.exports = {
  target: 'serverless',
  images: {
    loader: 'cloudinary',
    path: 'https://res.cloudinary.com/dzarf3lhh/',
  },
};
