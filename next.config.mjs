/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'fonts.googleapis.com',
      },
    ],
    domains: ['api.dicebear.com', 'ui-avatars.com'],
    dangerouslyAllowSVG: true,  // Enable SVG support
  },
};

export default nextConfig;
