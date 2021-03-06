build: {
    // Template for index.html
    index: path.resolve(__dirname, '../dist/index.html');
 
    // Paths
    assetsRoot: path.resolve(__dirname, '../dist');
    assetsSubDirectory: 'static';
    assetsPublicPath: './';
 
    /**
     * Source Maps
     */
 
    productionSourceMap: true;
    // https://webpack.js.org/configuration/devtool/#production
    devtool: '#source-map';
 
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false;
    productionGzipExtensions: ['js', 'css']
}