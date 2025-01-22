/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ['cdn.sanity.io', 'storage.googleapis.com'], // Add both domains here
  },
};

export default nextConfig;