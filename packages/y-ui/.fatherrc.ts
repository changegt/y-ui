export default {
  esm: "babel",
  cjs: "rollup",
  // extractCSS: true,
  // injectCSS: false,
  // cssModules: true, // 不使用css module
  disableTypeCheck: true,
  extraBabelPlugins: [
    [
      "babel-plugin-import",
      {
        libraryName: "antd",
        libraryDirectory: "es",
        style: true
      }
    ]
  ],
};
