/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  experimental: {
    serverActions: {
      allowedOrigins: ['genie3.vip', '*.genie3.vip'],
    },
  },
}

module.exports = nextConfig