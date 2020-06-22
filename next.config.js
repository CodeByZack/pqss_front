const path = require('path');
const withLess = require('@zeit/next-less')
module.exports = withLess({
  webpack: config => {
    config.resolve.alias={
      ...config.resolve.alias,
      "less": path.resolve(__dirname,"less"),
      "@": path.resolve(__dirname)
    };
    return config;
  }
});