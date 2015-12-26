var webpack = require('webpack');

module.exports = {
  context: __dirname + '/src',
  entry: {
    'lib': './index.js'
  },

  output: {
    path: __dirname + '/dist',
    filename: 'plottr.min.js',
    library: 'plottr',
    libraryTarget: 'umd'
  },

  externals: [
    {
      react: {
        root: 'React',
        commonjs2: 'react',
        commonjs: 'react',
        amd: 'react'
      }
    }
  ],

  module: {
    loaders: [
      // babeljs
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015', 'stage-0'] } }
    ]
  },

  node: {
    fs: 'empty'
  },

  devtool: 'inline-source-map',

  plugins: [
    new webpack.DefinePlugin({
      'process.env.NODE_ENV': JSON.stringify(process.env.NODE_ENV)
    })
  ]
};
