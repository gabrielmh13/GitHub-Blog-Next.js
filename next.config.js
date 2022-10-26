/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,

  images: {
    domains: [
      'www.github.com',
      'avatars.githubusercontent.com'
    ]
  },

  experimental: {
    newNextLinkBehavior: true
  }
}

module.exports = nextConfig
