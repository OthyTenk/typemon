/** @type {import('next').NextConfig} */
export const eslint = {
  ignoreDuringBuilds: false,
}
export const typescript = {
  ignoreBuildErrors: true,
}
export const images = {
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
}
