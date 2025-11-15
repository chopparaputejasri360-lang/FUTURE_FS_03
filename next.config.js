/** @type {import('next').NextConfig} */
const nextConfig = {
  
  images: {
    domains: ['images.unsplash.com', 'via.placeholder.com'],
  },
  // Enable static exports for Vercel deployment
  output: 'export',
  trailingSlash: true,
  // Disable image optimization for static export
  images: {
    unoptimized: true
  }
}

module.exports = nextConfig
