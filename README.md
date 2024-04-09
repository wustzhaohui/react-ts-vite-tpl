# 🚪 项目介绍

本项目作为Eric Chao的模版项目。项目使用vite+react+redux开发

# 🎁 项目启动
```
// 安装依赖
npm install

//dev调试
npm run dev

// 打包
npm run build
```

# 🧑‍💻项目技术栈介绍

- css与处理器使用less
- 全局请求管理使用axios
- 使用prettier来格式化代码风格
- 使用eslint来规范化代码
- react版本为18+
- react-dom使用6+
- redux作为全局状态管理

# 📁 目录介绍

```
.
├── README.md                 - xx
├── index.html                - 入口html文件
├── package-lock.json         - npm包管理器的lock文件
├── package.json              - npm包配置文件
├── public                    - 不打包的文件存放位置
├── src
   ├── App.tsx                                    - 入口组件
   ├── assets                                     - 静态资源存放目录
   ├── hooks                                      - 自定义hooks
   ├── main.tsx                                   - 入口文件
   ├── pages                                      - 页面存放位置
   ├── router                                     - 路由文件夹
   ├── service                                    - 请求文件夹
   ├── store                                      - redux配置
   ├── utils                                      - 工具文件夹
   └── vite-env.d.ts                              - xx
├── tsconfig.json             - ts的配置文件
├── tsconfig.node.json        - 同上
└── vite.config.ts            - vite配置文件
```
