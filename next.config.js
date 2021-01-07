const { nextI18NextRewrites } = require('next-i18next/rewrites');

const localeSubpaths = {};

module.exports = {
  compress: true,
  poweredByHeader: false,
  generateEtags: false,
  rewrites: async () => nextI18NextRewrites(localeSubpaths)
}
