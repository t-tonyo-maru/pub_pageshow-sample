// node
const path = require('path')
// lib
const Dotenv = require('dotenv-webpack')
const TerserPlugin = require('terser-webpack-plugin')

module.exports = (env, args) => {
  const mode = args.mode || 'development'
  const options = {
    mode,
    target: ['browserslist'],
    entry: {
      main: `./src/ts/main.ts`,
      sub: `./src/ts/sub.ts`
    },
    output: {
      filename: '[name].js',
      path: `${__dirname}/dist/assets/js`
    },
    module: {
      rules: [
        {
          test: /\.ts$/,
          use: 'ts-loader',
          exclude: [/node_modules/]
        }
      ]
    },
    resolve: {
      extensions: ['.ts', '.js']
    },
    plugins: [
      new Dotenv({
        path: path.resolve(__dirname, `.env.${mode}`)
      })
    ],
    optimization: {
      minimize: true,
      minimizer: [
        new TerserPlugin({
          terserOptions: {
            format: {
              comments: false
            }
          },
          extractComments: false
        })
      ]
    }
  }

  if (mode === 'development') {
    options.devtool = 'inline-source-map'
  }

  return options
}
