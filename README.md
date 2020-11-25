
# y-ui

> 组件库搭建框架，采用dumi、lerna、father-build实现

### 开发

* `npm run bootstrap` 安装项目依赖
* `npm run start` 启动项目开发

### 命令操作

* `npm bootstrap` 安装项目依赖
* `npm start` 启动开发环境
* `npm build` 构建组件产物
* `npm build:doc` 构建组件文档产物
* `npm publish` 发布组件到tnpm仓库上【注意 tnpm 需要先 login】
* `npm deploy:doc` 把文档产物发布到github pages上
* `npm deploy` 构建组件并并把组件发布到npm仓库上

### 项目结构

#### 框架目录

```
├── docs 【dumi文档】
├── packages
    ├── y-ui
    │   └── src
    │       ├── components    组件文件
    │       ├── index.ts     当前框架引入组件入口文件
```

#### 组件目录

```
└── components                       组件文件夹
    └── YButton                     组件文件
        ├── index.tsx                组件入口文件
        ├── index.less               less描述文件
```

### 依赖说明

[react-powerplug](https://github.com/renatorib/react-powerplug) (提供了可插拔无渲染组件)

[docz](https://github.com/pedronauck/docz) (书写文档和React组件预览工具)

[umi-plugin-library](https://github.com/umijs/umi-plugin-library) (基于umi组件库开发工具，为组件开发提供全套方案，专注库开发)

[lerna](https://github.com/lerna/lerna) (monorepo 管理工具)


```
数据结构
{
  "required": true, // 是否必要
  "description": "测试数字", // 描述

  "flowType": {
    // 类型名称
    // 基础类型 string、number、boolean、undefined、null
    // 引用类型 Array、union（枚举）、
    // 自定义 signature（自定义类型）
    "name": "boolean",

    // 自定义对象 object 或者函数 function
    "type": "object",

    // 非基础类型都会有，申明转化为string
    "raw": "any[]",

    // 自定义内容
    "signature": {
      // signature 为自定义对象的手
      "properties": [
        {
          "key": {}, // 对象的key
          "value": { "flowType", "required" }, // 对象的value
        }
      ],

      // 为函数时候
      "properties": {
        "arguments": [
          {
            "name": "b", // 参数名称
            "type": { "flowType" }, // flowType 结构
          }
        ], // 函数参数
        "return": { "flowType" }, // 函数返回值
      },
    }

    // elements 子元素 为数组或者枚举
    "elements": ["flowType", ....],
  },

}
```