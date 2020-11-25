const options = {
  savePropValueAsString: true,
  // shouldExtractValuesFromUnion: true,
  // shouldExtractLiteralValuesFromEnum: true,
  // skipChildrenPropWithoutDoc: true,
};

module.exports = {
  propsParser: require("react-docgen-typescript").withDefaultConfig([
    options,
  ]).parse,
  resolver: require('react-docgen').resolver.findAllComponentDefinitions,
  components: 'src/**/index.tsx',
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.tsx?$/,
          loader: 'ts-loader',
          exclude: /node_modules/,
        }
      ]
    },
  }
}