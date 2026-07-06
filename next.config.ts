import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Instruct the Next.js compiler to treat Prisma as a clean external package
  serverExternalPackages: ["@prisma/client"],
};

export default nextConfig;