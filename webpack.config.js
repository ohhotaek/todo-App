const path = require('path')
const { VueLoaderPlugin } = require('vue-loader')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')
const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const merge = require('webpack-merge')

module.exports = (env, opts) => {
  const config = {
    resolve: {
      extensions: ['.vue', '.js'],
      alias: {
        '~': path.join(__dirname),
        'scss': path.join(__dirname, './scss')
      }
    },
    entry: {
      app: [
        'core-js/stable', // core-js로 최신 JS 기능에 대한 polyfill
        'regenerator-runtime/runtime',
        path.join(__dirname, 'main.js')
      ]
    },
    output: {
      filename: '[name].js',
      path: path.join(__dirname, 'dist')
    },
    module: {
      rules: [
        {
          test: /\.vue$/,
          loader: 'vue-loader'
        },
        {
          test: /\.js$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader'
          ]
        },
        {
          test: /\.scss$/,
          use: [
            'vue-style-loader',
            'css-loader',
            'postcss-loader',
            'sass-loader'

          ]
        },
        {
          test: /\.d\.ts$/,
          use: 'ignore-loader'
        }
      ]
    },
    plugins: [
      new VueLoaderPlugin(),
      new HtmlWebpackPlugin({
        template: path.join(__dirname, 'index.html')
      }),
      new CopyPlugin({
        patterns: [
          {
            from: 'assets/', // 'assets/' 폴더에서 파일을 복사
            to: 'assets/' // 복사된 파일이 'dist/assets/' 폴더로 가도록 설정
          }
        ]
      })
    ]
  }
  if (opts.mode === 'development') {
    return merge(config, {
      devtool: 'eval',
      devServer: {
        open: false,
        hot: true
      }
    })
  } else {
    return merge(config, {
      devtool: 'cheap-module-source-map',
      plugins: [
        new CleanWebpackPlugin()
      ]
    })
  }
}
