# react-dome
react的模板
github新建项目并提交: https://www.jianshu.com/p/6969de20cd52 
devDependencies 和  dependencies 区别：
--save-dev 开发环境  --save 生产环境

安装过程：
npm init //创建package.json
npm install --save react 安装react
npm install --save react-dom 安装React Dom,这个包是用来处理virtual DOM;用React Native 就安装react-native
npm install --save-dev webpack 安装webpack 打包工具
npm install --save-dev webpack-dev-server 主要特性是支持热加载（小型express服务器）
npm install --save-dev babel-core 安装Babel, 可以把ES6转换为ES5
npm install --save babel-polyfill   npm install --save-dev babel-loader    npm install --save babel-runtime   npm install --save-dev babel-plugin-transform-runtime    npm install --save-dev babel-preset-es2015    npm install --save-dev babel-preset-react    npm install --save-dev babel-preset-stage-2  其他babel依赖