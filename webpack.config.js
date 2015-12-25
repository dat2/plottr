module.exports = {
  context: __dirname + '/src',
  entry: './index.js',

  output: {
    filename: 'plottr.js',
    path: __dirname + '/dist'
  },

  module: {
    loaders: [
      // babeljs
      { test: /\.js$/, exclude: /node_modules/, loader: 'babel', query: { presets: ['react', 'es2015'] } }
    ]
  },

  devtool: 'inline-source-map'
};
