/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["dummyimage.com", "res.cloudinary.com"],
  },
  async redirects() {
    return [
      {
        source: "/category/profile",
        destination: "/profile",
        permanent: false,
      },
    ];
  },
};

export default nextConfig;
