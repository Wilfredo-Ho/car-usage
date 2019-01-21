# car-usage

### 在用车Vue版本

##### 发布
1. 打包后找不到css, js文件：

    >   root/config/index.js
    
    ```
        build: {
            ...,
            // assetsPublicPath: '/',
            assetsPublicPath: './',
            ...
        }
    ```
    
2. 打包后找不到字体文件(iview):

    >   build/webpack.prod.conf.js

    ```
        module: {
            rules: utils.styleLoaders({
            sourceMap: config.build.productionSourceMap,
            // extract: true
            extract: false
            })
        },
        
    ```

---


#### 已完成工作：

---


##### 时间戳

###### Day1:
    1. 加入vuex对次级菜单的控制
    2. 母版页监听路由，来控制初次加载
    3. 菜单层级抽取可以大大简化代码
    4. 菜单所有相关MenuItem, TabPane均以path（router）作为key

---

##### Day2:
1. 封装echarts组件:

    >   props: { option | loading | height(单位px) }
    >   思路： 监听loading, 来控制charts的变化

2. 自适应性

    >   采用rem方式，最小屏宽 1000 px

3. 移除.gitignore中关于dist的限制


##### Day3:
1. 从vue-cli 2.x 移植到 vue-cli 3.x: 更加简洁/干净
    > 对于webpack配置的修改放在了 *vue.config.js* 中
    > 指令的变化
    > vue ui的可简化配置

2. 一般化方法的封装：
    > extNumber: 字符中数字提取（去掉单位）
    > thousandBitSeparator: thousandBitSeparator
    > $post: 基于axios的post请求封装

3. 首页的制作
    Row, Col, Charts

4. table-pagination的封装
    Table, Page




## Project setup
```
npm install
```

### Compiles and hot-reloads for development
```
npm run serve
```

### Compiles and minifies for production
```
npm run build
```

### Run your tests
```
npm run test
```

### Lints and fixes files
```
npm run lint
```
