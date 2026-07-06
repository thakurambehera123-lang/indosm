import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // TypeScript errors ko build block karne se completely disable karega
    ignoreBuildErrors: true,
  },
  eslint: {
    // Eslint standard validations ko compiler space se ignore karega
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;