# Vite-Project

#### Node.js

即使曾经安装过也使用最新版node.js重新安装，自动覆盖。修改到合适分区，例如D:\。其他全部默认，无需安装Chocolatey。

windows是中文用户名可能会有影响。

#### NPM Settings

进入windows命令行模式，设置npm服务器使用aliyun镜像。复制以下命令，在控制台鼠标右键选择粘帖，回车执行。

```sh
npm config set registry http://registry.npmmirror.com
```

#### Vite Project

https://staging-cn.vuejs.org/guide/quick-start.html#with-build-tools

在合适位置创建vue-workspace工作区目录，存放所有vue项目。

通过命令行，进入工作区，执行项目初始化命令。

```shell
npm init vue@latest
```

选择以下配置。TypeScript/router/pinia/eslint/prettier

```sh
✔ Project name: … <your-project-name>
✔ Add TypeScript? … Yes
✔ Add JSX Support? … No
✔ Add Vue Router for Single Page Application development? … Yes
✔ Add Pinia for state management? … Yes
✔ Add Vitest for Unit testing? … No
✔ Add Cypress for both Unit and End-to-End testing? … No
✔ Add ESLint for code quality? … Yes
✔ Add Prettier for code formatting? … Yes
```

#### VS Vode

下载压缩版vscode，解压运行。安装volar/TypeScript Vue Plugin/eslint，3个插件，重启vs code。

打开项目目录，打开vs code控制台，crtl+`

在控制台视图(默认即是当前项目路径下)，安装依赖。由于配置了国内镜像，下载速度会很快。依赖在100M以上

```sh
npm i
```
启动项目

```sh
npm run dev
```

结束运行，在控制台输入组合键

```sh
ctrl+c
```

#### eslint/prettier

以eslint检查代码规范，以prettier统一代码风格，并在保存文件时自动修复错误

创建，.prettierrc.json。单引号，无分号，不检测文件结束符格式

```json
{
    "htmlWhitespaceSensitivity": "ignore",
    "singleQuote": true,
    "semi": false,
    "endOfLine": "auto"
}
```
重启vs code

修改.esintrc.cjs，添加规则

```sh
rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
    'vue/multi-word-component-names': 'off',
  },
```

当前项目.vscode目录下，创建settings.json。声明项目的vscode配置

```json
{
  "editor.fontSize": 18,
  "window.zoomLevel": 1.0,
  "editor.wordWrap": "on", 
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
  "git.enableSmartCommit": true,
  "workbench.colorTheme": "Default Light+",
  "typescript.updateImportsOnFileMove.enabled": "always",
  "javascript.updateImportsOnFileMove.enabled": "always",
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "emmet.triggerExpansionOnTab": true,
}
```

#### Others

ts文件仍不支持引入vue组件的自动提示  
vue3.2引入的script setup标签很方便，且声明的响应式数据/函数等视图终于支持了自动提示  


vue组件规范名称为多单词，单单词可以以单词View为后缀，或使用大驼峰或`-`短横线分割

https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential