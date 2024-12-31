/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["nextui.org"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**.example.com",
      },
    ],
  },
};

module.exports = nextConfig;
