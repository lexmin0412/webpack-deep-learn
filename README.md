# webpack 深入学习笔记

## 安装

1. 安装webpack

```shell
npm install webpack webpack-cli -D
```

安装完成之后你会看到如下的输出：

![image](http://note.youdao.com/yws/res/28826/5C160C62A0904C6EAA24A28E4154AE70)

2. 检查是否安装成功

在命令行中输入如下命令：

```
npx webpack -v
```

如果命令行打印出了如下的结果，则说明安装成功。

![image](http://note.youdao.com/yws/res/28837/B5BC12543D36430EB0BFB969CAF5B9EE)

> npx 是 npm 自带的一个工具，npx webpack 指向 node_modules/webpack/bin/webpack.js，它是由 webpack 依赖的 package.json 文件下的 bin 配置决定的。

```js
// node_modules/webpack/package.json
{
    "bin": {
      "webpack": "bin/webpack.js"
    },
}
```

## 启动 webpack 执行构建

在 src 下创建一个 index.js 并添加以下内容：

```js
// src/index.js
console.log('hello webpack')
```

然后运行 `npx webpack`, 

在命令行中会得到如下输出：

![image](http://note.youdao.com/yws/res/28876/6DCC5CB63C7E49BD818E4986EC2D2B46)

- Hash, 当前构建的唯一hash标识
- Version, webpack版本
- Time, 当次构建的时间
- 其他为构建的主体信息


### webpack构建过程：

当在命令行中输入 webpack 命令时，webpack首先会在项目根目录下寻找一个名为 webpack.config.js 的配置文件，按照配置来进行构建；如果没有找到，则会使用 webpack 的默认配置来进行构建。

在项目根目录下创建 webpack.config.js 文件，并添加以下内容：

```
// webpack.config.js
const path = require('path')

module.exports = {
    entry: './src/index.js', // 入口 执行构建的入口文件，项目入口文件
    output: {  // 输出文件
        path: path.resolve(__dirname, './dist'),  // 构建出来的资源文件存放路径 必须是绝对路径
        filename: 'main.js'  // 文件名称
    }
}
```

以上就是 webpack 的默认配置，它其实就是一个对象。

> __dirname 是 node.js 的一个全局变量，它会返回当前目录的绝对路径

### 验证打包后的文件

为了验证构建后的文件，我们在 dist 目录下新建一个 index.html，然后引入 dist/main.js，

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
  <script src="./main.js"></script>
</head>
<body>
  
</body>
</html>
```

然后在浏览器中打开 index.html，可以在控制台看到我们在 main.js 中打印的内容：

![image](http://note.youdao.com/yws/res/28951/8D522657F8834E5892E083C665CF4D38)

**进度** https://learn.kaikeba.com/
![image](http://note.youdao.com/yws/res/28964/5047CE7BBE7A42D99122B5248B1EBEA3)