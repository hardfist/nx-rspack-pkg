const { composePlugins, withNx, withReact } = require('@nx/rspack');
const GeneratePackageJsonPlugin = require('generate-package-json-webpack-plugin');

module.exports = composePlugins(withNx(), withReact(), (config) => {
  config.plugins.push(
    new GeneratePackageJsonPlugin({
      name: 'my-nodejs-module',
      version: '1.0.0',
      main: './index.js',
      engines: {
        node: '>= 14',
      },
    })
  );
  return config;
});
