module.exports = {
  presets: [
    ['@babel/preset-env', { targets: { node: 'current' } }],
    ['@babel/preset-react', { runtime: 'automatic' }],
    '@babel/preset-typescript',
  ],
  plugins: [
    'react-native-web',
    // Strip Flow type annotations from react-native packages
    '@babel/plugin-transform-flow-strip-types',
  ],
};
