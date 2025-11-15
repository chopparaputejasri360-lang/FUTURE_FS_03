const nextConfig = {
  experimental: { appDir: true },
  images: {
    domains: ['images.unsplash.com', 'via.placeholder...'],
    unoptimized: true
  },
  output: 'export'
};

module.exports = nextConfig;