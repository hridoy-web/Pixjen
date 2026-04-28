/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  //https://i.pinimg.com/1200x/71/aa/cf/71aacf0b0ec1d0ba76be59654fa9bfe4.jpg
  reactCompiler: true,
   images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'i.pinimg.com',
      },
    ],
  },
};

export default nextConfig;
