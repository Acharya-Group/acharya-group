/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    // allow all paths from randomuser.me
    remotePatterns: [
      {
        protocol: "https",
        hostname: "randomuser.me",
        pathname: "/**",
      },
       {
        protocol: "https",
        hostname: "cdn0.iconfinder.com",
        pathname: "/**",
      },
    ],


  },
};

module.exports = nextConfig;
