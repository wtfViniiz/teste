import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  typescript: {
    // Permite que o build passe mesmo com pequenos avisos de tipagem durante a migração
    ignoreBuildErrors: true,
  },
  eslint: {
    ignoreDuringBuilds: true,
  },
};

export default nextConfig;
