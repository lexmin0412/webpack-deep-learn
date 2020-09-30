const path = require( 'path' )

module.exports = {
  entry: './src/index.js', // 入口 执行构建的入口文件，项目入口文件
  output: { // 输出文件
    path: path.resolve( __dirname, './dist' ), // 构建出来的资源文件存放路径 必须是绝对路径
    filename: 'bundle.js' // 文件名称
  }
}