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
