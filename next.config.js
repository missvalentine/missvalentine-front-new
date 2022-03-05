/** @type {import('next').NextConfig} */
const path = require('path');

const nextConfig = {
  reactStrictMode: true,
  sassOptions: {
    includePaths: [path.join(__dirname, 'styles')],
    prependData: `@import "/styles/main.scss";`,
  },
  images: {
    domains: ['missvalentine-images.s3.amazonaws.com'],
    minimumCacheTTL: 3600,
    loader: 'imgix',

    // formats: ['image/jpeg', 'image/png'],
  },
}

module.exports = nextConfig
