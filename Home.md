# Vite-Project

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
npm init vue@latest
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

2024.03.04. vue引入最新vs code插件`vue-official`替代`volar`，取消了TS的take over接管模式以提高性能。

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

以eslint检查代码规范，以prettier统一代码风格，并在保存文件时自动修复错误

修改.prettierrc.json。忽略Windows/Linux行结束符`CRLF/LF`的差异；关闭闭合标签单行等。

```json
{
  "$schema": "https://json.schemastore.org/prettierrc",
  "semi": false,
  "tabWidth": 2,
  "singleQuote": true,
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
  "editor.fontSize": 16,
  "window.zoomLevel": 1.0,
  "editor.codeActionsOnSave": {
    "source.organizeImports": "explicit",
    "source.fixAll": "explicit"
  },
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "editor.wordWrap": "on",
  "git.enableSmartCommit": true,
  "workbench.colorTheme": "Default Light+",
  "vue.updateImportsOnFileMove.enabled": true,
  "explorer.confirmDelete": false,
  "explorer.confirmDragAndDrop": false,
  "editor.suggest.snippetsPreventQuickSuggestions": false
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
