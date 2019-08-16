# 简介

- 【vue-yinyuetai】是一个基于Vue前端框架模仿的音悦台商城
> <br>
> 音悦商城是音悦台为粉丝提供的官方周边商品购买平台，涉及的商品类别包括：专辑、周边、化妆品、数码产品、明星同款。<br>
> 提供了首页数据展示，购物车状态管理，个人中心，订单中心状态模块
> <br>

-  前端技术栈；
> <br>
> Vue-cli(脚手架)<br>
> element-UI<br>
> routes<br>
> Vuex
> <br>
-  使用mockjs处理数据
-  使用axios来处理数据提交（Get、Post）和拦截；
-  使用vue-lazyload 实现图片懒加载；
-  使用scss为css的处理语言；
-  使用svg矢量图标；

 
## 使用帮助：

> 加载依赖
-   npm i (npm install)

> 启动服务 localhost:8082
-   npm run dev

>  线上部署
-   npm run build

- 项目使用sass会有意想不到的Bug，大致整理了一下
- 使用前先下载node-sass。不然会报错
  ``` bash
  Module build failed: Error: Cannot find module 'node-sass'
    at Function.Module._resolveFilename (internal/modules/cjs/loader.js:582:15)
    at Function.Module._load (internal/modules/cjs/loader.js:508:25)
    at Module.require (internal/modules/cjs/loader.js:637:17)
    at require (internal/modules/cjs/helpers.js:22:18)
  ```
- 启动服务的时候如果报node-sass请看：[Vue中使用node-sass报错的解决方法](https://adeng.vip/index.php/article/39.html)

- 在下载sass依赖
  cnpm install sass sass-loader node-sass --save-dev

- 全局设置cnpm淘宝镜像
  $ npm install -g cnpm --registry=https://registry.npm.taobao.org


## 项目中遇到的问题

- Vue-cli中如何配置axios和cookies
> https://www.cnblogs.com/nogodie/p/9853660.html

- Vue-cli中如何使用jsonp请求数据
> https://www.cnblogs.com/xiaoli52qd/p/7235901.html

- --save 和 --save-dev 的区别
> dependencies下记录的是项目在运行时必须依赖的插件，常见的例如vue react jquery等，即使项目打包好了、上线了，这些也是需要用的，否则程序无法正常执行。<br>
> devDependencies下记录的是项目在开发过程中使用的插件，例如我们开发过程中需要使用webpack打包，而我在工作中使用fis3打包，但是一旦项目打包发布、上线了之后，webpack和fis3就都没有用了，可卸磨杀驴。

- vue项目中正确添加swiper组件
> https://blog.csdn.net/u011663332/article/details/83790303

- 针对优先级最高Css设置 /deep/
> /deep/ .swiper-button-next{<br>
  right: 20px;<br>
}<br>

- vue-lazyload图片懒加载
> https://juejin.im/entry/57b5c3585bbb50006305becb <br>
> https://segmentfault.com/a/1190000014928116

- Vue项目中svg图标不能正常显示
> http://www.mamicode.com/info-detail-2642781.html  <br>
> https://blog.csdn.net/quangezai666/article/details/78962616






## 接口地址
- 首页接口：
> http://shop.yinyuetai.com/shopRec/list.json <br>
rec_id: 7  //轮播图<br>
rec_id: 2  //追星必备<br>
rec_id: 4  //爆款周边<br>
http://shop.yinyuetai.com/goods/publish.json?max_count=6  //新品首发<br>
http://shop.yinyuetai.com/goods/listForGood.json?order_snum=true&max_count=8  //top榜-商品<br>
http://shop.yinyuetai.com/goods/listForArt.json?group_art=true&order_snum=true&max_count=8  //top榜-专辑<br>
http://shop.yinyuetai.com/search/goods.json   pageNum=1&pageSize=6  // 大家喜欢<br>
http://shop.yinyuetai.com/favorites/add.json  添加喜欢<br>




## 其他

``` bash

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run e2e tests
npm run e2e

# run all tests
npm test
```

## 关于我

[前端蜗牛](https://adeng.vip)

- 不会点设计的代码仔不是好代码仔。
