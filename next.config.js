/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: { domains: ["www.gravatar.com"] },
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
