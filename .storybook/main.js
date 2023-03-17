const path = require('path');

const tailwindConfigPath = path.join(__dirname, '../tailwind.config.js');
require('storybook-tailwind-foundations/initialize.js').default(
  tailwindConfigPath
);

module.exports = {
  stories: ['../src/**/*.stories.mdx', '../src/**/*.stories.@(js|jsx|ts|tsx)'],
  addons: [
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@storybook/addon-interactions',
    {
      name: '@storybook/addon-postcss',
      options: {
        postcssLoaderOptions: {
          implementation: require('postcss'),
        },
      },
    },
    'storybook-addon-next-router',
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },
  features: {
    postcss: true,
  },
  webpackFinal: async (config) => {
    /**
     * Add support for alias-imports
     * @see https://github.com/storybookjs/storybook/issues/11989#issuecomment-715524391
     */
    config.resolve.alias = {
      ...config.resolve.alias,
      '@': path.resolve(__dirname, '../src'),
      '@components': path.resolve(__dirname, '../src/components'),
      '@fetchers': path.resolve(__dirname, '../src/fetchers'),
      '@interfaces': path.resolve(__dirname, '../src/interfaces'),
      '@mocks': path.resolve(__dirname, '../src/__mocks__'),
      '@pages': path.resolve(__dirname, '../src/pages'),
      '@stories': path.resolve(__dirname, '../src/stories'),
      '@styles': path.resolve(__dirname, '../src/styles'),
      '@consts': path.resolve(__dirname, '../src/consts'),
    };

    return config;
  },
};
