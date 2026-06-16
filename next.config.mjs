/** @type {import('next').NextConfig} */
const nextConfig = {
  /* config options here */
  reactCompiler: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xysvbrrvqnfxkdhlaaul.supabase.co",
      },
    ],
  },
};

export default nextConfig;
