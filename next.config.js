/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    apiUrl:
      process.env.NODE_ENV !== "production" ? "http://localhost:3000/" : "",
  },
};

module.exports = nextConfig;
