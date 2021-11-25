// Extract CSS when that option is specified
// (which is the case during production build)
if (options.extract) {
    return ExtractTextPlugin.extract({
      use: loaders,
      fallback: 'vue-style-loader',
      publicPath:'../../'
    })
  } else {
    return ['vue-style-loader'].concat(loaders)
  }