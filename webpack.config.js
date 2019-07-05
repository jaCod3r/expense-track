const path = require('path')
const ExtractTextPlugin = require('extract-text-webpack-plugin')

module.exports = (env) => {
  const isProduction = env === 'production'
  const CSSExtract = new ExtractTextPlugin('styles.css')
  console.log('env', env)
  return {
    entry: './public/src/app.jsx',
    output: {
      path: path.join(__dirname, 'public'),
      filename: 'bundle.js'
    },

    module: {
      rules: [
        {
          loader: 'babel-loader',
          test: /\.jsx$/,
          exclude: /node_modules/
        },
        {
          test: /\.s?css$/,
          use: CSSExtract.extract({
            use: [
              { loader: 'css-loader', options: { sourceMap: true } },
              { loader: 'sass-loader', options: { sourceMap: true } }]
          })
        }

      ]
    },
    devtool: isProduction ? 'source-map' : 'inline-source-map',
    plugins: [
      CSSExtract
    ],
    devServer: {
      contentBase: path.join(__dirname, 'public'),
      historyApiFallback: true
    }
  }
}