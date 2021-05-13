const withReactSvg = require("next-react-svg");
const path = require("path");

/**
 * Next configuration.
 *
 * https://nextjs.org/docs/api-reference/next.config.js/introduction
 */

module.exports = withReactSvg({
  include: path.resolve(__dirname, "src/assets/svg"),
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: {
        test: /\.(js|ts)x?$/,
      },
      use: ["@svgr/webpack", "url-loader"],
    });

    return config;
  },
});