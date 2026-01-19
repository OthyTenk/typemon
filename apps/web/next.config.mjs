/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    minimumCacheTTL: 900,
    remotePatterns: [
      {
        protocol: "https",
        hostname: "0.gravatar.com",
        port: "",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        port: "",
        pathname: "/**",
      },
    ],
  },
  typescript: {
    ignoreBuildErrors: true,
  },
}

export default nextConfig
