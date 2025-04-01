import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async rewrites() {
    return [
      {
        source: "/api/:path*",
        destination: "https://api.wonderbox.cloud/:path*", // URL del tuo backend
      },
    ];
  },

  async headers() {
    return [
      {
        source: "/api/:path*", // Punto di accesso tramite il proxy Next.js
        headers: [
          {
            key: "Access-Control-Allow-Origin",
            value: "*", // O il dominio specifico del tuo frontend
          },
          {
            key: "Access-Control-Allow-Methods",
            value: "GET, POST, PUT, DELETE, OPTIONS",
          },
          {
            key: "Access-Control-Allow-Headers",
            value: "Content-Type, Authorization",
          },
          {
            key: "Access-Control-Allow-Credentials",
            value: "true", // Se stai usando i cookie
          },
        ],
      },
    ];
  },
};

export default nextConfig;

