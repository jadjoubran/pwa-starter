var path = require('path');
var SWPrecacheWebpackPlugin = require('sw-precache-webpack-plugin');


module.exports = {
  context: __dirname,

  entry: {
    main: path.resolve(__dirname, 'js/pwa.js'),
  },

  output: {
    path: path.resolve(__dirname, 'src/bundles/'),
    filename: '[name]-[hash].js',
  },

  plugins: [
    new SWPrecacheWebpackPlugin(
      {
        cacheId: require('./package.json').name,
        filepath: path.resolve(__dirname, 'service-worker.js'),
        maximumFileSizeToCacheInBytes: 4194304,
        minify: true,
        staticFileGlobs: [
          'index.html',
        ],
        runtimeCaching: [],
      }
    ),
  ]
}