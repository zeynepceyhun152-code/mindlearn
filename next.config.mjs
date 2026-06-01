/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    // This forces production builds to successfully complete even i
    ignoreBuildErrors: true,
  },
  eslint: {
    // This allows production builds to successfully complete even if
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
