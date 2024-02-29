/** @type {import('next').NextConfig} */

module.exports = (phase, { defaultConfig }) => {
  if ('sassOptions' in defaultConfig) {
    defaultConfig.sassOptions = {
      includePaths: ['./src'],
      prependData: '@import "~@/styles/variables.scss";',
    };
  }

  const nextConfig = {
    reactStrictMode: false,
    // env: {
    //   API_BASE_URL: process.env.API_BASE_URL,
    // },
    images: {
      unoptimized: true,
    },

    trailingSlash: true,

    webpack(config) {
      config.module.rules.push({
        test: /\.svg$/,
        use: ['@svgr/webpack'],
      });

      return config;
    },
  };
  return nextConfig;
};
