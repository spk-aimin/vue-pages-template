# vue多页面应用模板

> 

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# 文档
npm run docs
```

 ## 文档编写

‘/docs’目录为存放项目文档的目录


## 本地接口

‘/build/local_interface’目录下可自定义本地接口

## 页面模板配置

> '/temlate'文件夹放置页面模板及页面模板配置


* config.js 模板配置文件
```
module.exports = {
    '文件名（同viwes文件下js同名）': {
        template: '模板文件',
        title: "页面标题"
    }
}
```
* **.html模板文件


## 本地开发页面访问 

[host]/views/[views文件夹下文件夹名].html