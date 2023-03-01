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
  ],
  framework: '@storybook/react',
  core: {
    builder: '@storybook/builder-webpack5',
  },

  features: {
    postcss: true,
  },
};
