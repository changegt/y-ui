const styleguidist = require('react-styleguidist');
const styleguide = styleguidist({
  logger: {
    warn: console.warn,
    info: console.log,
    debug: console.log
  },
  components: './src/YLine/index.tsx',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
        {
          test: /\.css$/,
          use: [
            'style-loader',
            {
              loader: 'css-loader',
              options: {
                modules: true
              }
            }
          ]
        }
      ]
    }
  }
})


styleguide.build((err, config, stats) => {
  if (err) {
    console.log(err);
    return;
  }

  console.log(stats);
})