/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  env: {
    REACT_APP_GOOGLE_CLIENT_ID: '759936192585-hskbfs14mmvbrh92epljl0ju65pe6r9u.apps.googleusercontent.com'
  },
  eslint: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    ignoreDuringBuilds: true,
  },
  images: {
    // Warning: This allows production builds to successfully complete even if
    // your project has ESLint errors.
    unoptimized: true,
  },
}

module.exports = nextConfig

