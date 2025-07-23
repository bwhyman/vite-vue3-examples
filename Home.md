# Vite-Project

### Update

#### 2024-11-03

vite:5.4+vue:3.5创建项目配置更新。  
引入了vs code `explorer.fileNesting` 配置。支持资源管理器将指定的相关文件收缩在一个文件下，展示效果更简洁。  
引入了 `EditorConfig` 插件。约束编辑器的缩进/空格等，和 `prettier` 功能有重叠。  
引入的`eslint`默认规则禁用了仅执行而未赋值的短路表达式，等。感觉强制规范越来越像Java而限制了JS的灵活性。可以手动修改配置规则。

```js
// 以下表达式仅执行了函数而没有将结果赋值，算错误
user && users.push(user)
```

### Video

**由于版本变更频繁，以文档内容为准**

[配置视频](https://mooc1.chaoxing.com/nodedetailcontroller/visitnodedetail?courseId=208931964&knowledgeId=569788774)

### Node.js

即使曾经安装过也使用最新版node.js重新安装，自动覆盖。修改到合适分区位置，例如D:\Program Files\nodejs。其他全部默认，无需安装Chocolatey。

### Workspace

https://staging-cn.vuejs.org/guide/quick-start.html#with-build-tools

在合适位置创建vue项目工作区目录，例如`D:\workspace-vue`。

打开工作区目录，在地址栏键入`cmd`打开控制台，直接定位到当前目录。

#### NPM Settings

设置npm服务器使用tencent镜像。复制以下命令，在控制台鼠标右键直接粘帖，回车执行。

```shell
npm config set registry http://mirrors.cloud.tencent.com/npm/
```

或ali镜像

```shell
npm config set registry http://registry.npmmirror.com
```

### Vite Project

在控制台，执行项目初始化命令。

```shell
npm create vue@latest
```

选择安装以下配置：TypeScript/router/eslint/prettier。后期引入VueUse，因此无需安装Pinia。

```sh
√ 请输入项目名称： ... vue-test
√ 是否使用 TypeScript 语法？ ... 是
√ 是否启用 JSX 支持？ ... 否
√ 是否引入 Vue Router 进行单页面应用开发？ ... 是
√ 是否引入 Pinia 用于状态管理？ ... 否
√ 是否引入 Vitest 用于单元测试？ ... 否
√ 是否要引入一款端到端（End to End）测试工具？ » 不需要
√ 是否引入 ESLint 用于代码质量检测？ ... 是
√ 是否引入 Prettier 用于代码格式化？ ... 是
```

### VS Vode

下载压缩版vscode，解压到合适位置运行。

vs code打开项目目录，右下角按项目模板建议安装`Vue - Official/eslint/prettier`3个插件。

2024-03-04. vue引入最新vs code插件`vue-official`替代`volar`，取消了TS的take over接管模式以提高性能。

`ctrl + ~`打开vs code控制台。

在控制台视图(默认即是当前项目路径下)，安装依赖。由于配置了国内镜像，下载速度会很快。依赖在100M以上

```shell
npm i
```

启动项目

```shell
npm run dev
```

结束运行，在控制台按组合键

```shell
ctrl+c
```

### eslint/prettier

2024-11-03. 引入editorconfig共同检测代码规范。

以eslint检查代码规范，以prettier统一代码风格，并在保存文件时自动修复错误，修改 `eslint.config.js`，追加短路操作宽松规范。

```js
files: ['**/*.{ts,mts,tsx,vue}'],
    rules: {
      'no-unused-expressions': ['error', { allowShortCircuit: true }]
    }
```

修改`.prettierrc.json`。忽略Windows/Linux行结束符`CRLF/LF`的差异；关闭闭合标签单行等。

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "singleQuote": true,
  "arrowParens": "avoid",
  "printWidth": 100,
  "trailingComma": "none",
  "endOfLine": "auto",
  "htmlWhitespaceSensitivity": "ignore",
  "bracketSameLine": true
}
```

项目.vscode目录下，创建settings.json。声明项目样式/字体/活动状态代码片段支持自动提示等vscode配置

```json
{
  "explorer.fileNesting.enabled": true,
  "explorer.fileNesting.patterns": {
    "tsconfig.json": "tsconfig.*.json, env.d.ts",
    "vite.config.*": "jsconfig*, vitest.config.*, cypress.config.*, playwright.config.*",
    "package.json": "package-lock.json, pnpm*, .yarnrc*, yarn*, .eslint*, eslint*, .prettier*, prettier*, .editorconfig"
  },
  "editor.codeActionsOnSave": {
    "source.fixAll": "explicit",
    "source.organizeImports": "explicit"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.fontSize": 16,
  "window.zoomLevel": 1.0,
  "workbench.colorTheme": "Default Light+",
  "editor.wordWrap": "on",
  "editor.linkedEditing": true
}
```

#### Vue Snippet

项目.vscode目录下，创建vue组件模板文件`vue.json.code-snippets`。实现在vue文件中，输入`vuec`即可创建以下模板

```json
{
    "vue-component":{
        "prefix":"vuec",
        "body": [
            "<script setup lang=\"ts\">"
            "$0"
            "</script>"
            "<template>"
            "<div></div>"
            "</template>"
        ]
    }
}
```

重启vs code

#### Component Names

vue组件规范名称为多单词，建议所有视图组件以View为后缀，通用组件以vue为后缀

https://vuejs.org/v2/style-guide/#Multi-word-component-names-essential
