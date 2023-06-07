const withImages = require('next-images');
const withCSS = require('@zeit/next-css');

module.exports = withImages(withCSS({
  webpack(config) {
    config.resolve.extensions.push('.ts', '.tsx');

    return config;
  },
}));
