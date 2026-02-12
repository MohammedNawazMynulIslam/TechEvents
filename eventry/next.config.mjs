/** @type {import('next').NextConfig} */
import withPlaiceholder from "@plaiceholder/next"
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'res.cloudinary.com',
      },
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default withPlaiceholder(nextConfig);
