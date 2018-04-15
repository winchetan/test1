var path= require('path');

module.exports = {
  entry : './script.jsx',
  output : {
    path : path.resolve(__dirname),
    filename: 'transpiled.js'
  },
  module : {
    rules: [ // rules rules
        {
          test: /\.jsx?$/,
          loaders: 'babel-loader',
          //use:'babel-loader', // use here
          exclude : /node_modules/,
          query : {
            presets : ['es2015','react']
          }
        }
      ]
}
}

//path : path.resolve(__dirname,'react/index.html'),


            /*    rules: [
                  {
                  test:/\.jsx?$/,
                  use:'babel-loader',
                  exclude : /node_modules/,
                  query : {
                    presets : ['es2015','react']
                  }
                }
              ]*/
