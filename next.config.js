/** @type {import('next').NextConfig} */
const nextConfig = {
    // Other configuration options...
  
    output: {
      exportPathMap: () => ({
        "/": { page: "/" },
      }),
    },
  };
  
  module.exports = nextConfig;
  