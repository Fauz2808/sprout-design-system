import type { StorybookConfig } from '@storybook/react-webpack5';

const config: StorybookConfig = {
  stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'],

  addons: [
    '@storybook/addon-essentials',
    '@storybook/addon-controls',
    '@storybook/addon-docs',
    '@storybook/addon-interactions',
    'storybook-addon-designs',
  ],

  framework: {
    name: '@storybook/react-webpack5',
    options: {},
  },

  docs: {
    autodocs: 'tag',
  },

  webpackFinal: async (config) => {
    // Resolve react-native to react-native-web for browser rendering
    config.resolve = config.resolve ?? {};
    config.resolve.alias = {
      ...(config.resolve.alias ?? {}),
      'react-native': 'react-native-web',
    };

    // Handle TypeScript
    config.resolve.extensions = [
      '.web.tsx',
      '.web.ts',
      '.web.jsx',
      '.web.js',
      '.tsx',
      '.ts',
      '.jsx',
      '.js',
    ];

    // Strip Flow types from @react-native packages (they use `export type` syntax)
    // These files are in node_modules so they're normally excluded from Babel.
    config.module = config.module ?? {};
    config.module.rules = config.module.rules ?? [];
    config.module.rules.push({
      test: /\.js$/,
      include: /node_modules\/@react-native/,
      use: {
        loader: require.resolve('babel-loader'),
        options: {
          presets: ['@babel/preset-env'],
          plugins: ['@babel/plugin-transform-flow-strip-types'],
        },
      },
    });

    return config;
  },
};

export default config;
