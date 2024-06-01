/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      /*  "graphikaz.digifaz.com",
      "oifoeivdflxzgtj0.public.blob.vercel-storage.com", */
      {
        protocol: "https",
        hostname: "graphikaz.digifaz.com",
        pathname: "**",
      },
      {
        protocol: "https",
        hostname: "oifoeivdflxzgtj0.public.blob.vercel-storage.com",
        pathname: "**",
      },
    ],
  },
};

module.exports = nextConfig;
