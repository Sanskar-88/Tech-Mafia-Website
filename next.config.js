/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: [],
    unoptimized: true, // This allows the site to work without actual images
  },
  // Enable static exports for hosting on platforms that don't support Next.js
  // output: 'export', // Uncomment this line for static export
};

module.exports = nextConfig; 