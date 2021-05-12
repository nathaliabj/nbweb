/**
 * Next configuration.
 *
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 */
module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack"],
    });

    return config;
  },
};