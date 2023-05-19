# Vite-Project

#### Node.js

即使曾经安装过也使用最新版node.js重新安装，自动覆盖。修改到合适分区位置，例如D:\Program Files\nodejs。其他全部默认，无需安装Chocolatey。

**windows中文用户名会影响NPM命令的执行**

#### NPM Settings

`win+R`组合键打开运行，输入`cmd`打开windows控制台

设置npm服务器使用aliyun镜像。复制以下命令，在控制台鼠标右键选择粘帖，回车执行。

```sh
npm config set registry http://registry.npmmirror.com
```

#### Vite Project

https://staging-cn.vuejs.org/guide/quick-start.html#with-build-tools

在合适位置创建workspace-vue工作区目录，存放所有vue项目。

打开工作区目录，在地址栏键入`cmd`打开控制台，直接定位到当前目录，执行项目初始化命令。

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

下载压缩版vscode，解压运行。安装`volar/TypeScript Vue Plugin/eslint/Auto Rename Tag`插件，重启vs code。

打开项目目录，打开vs code控制台，crtl+`

在控制台视图(默认即是当前项目路径下)，安装依赖。由于配置了国内镜像，下载速度会很快。依赖在100M以上

```sh
npm i
```

启动项目

```sh
npm run dev
```

结束运行，在控制台按组合键

```sh
ctrl+c
```

#### Volar Takeover

为使用Volar提供的TS服务，需禁用vscode默认的TS支持。

打开vs code插件标签搜索，`@builtin typescript`，选择`TypeScript and JavaScript Language Features`插件，禁用。reload vscode，当文件为vue/ts时，右下角出现`takeover`标签生效。

[搭配 TypeScript 使用 Vue | Vue.js](https://cn.vuejs.org/guide/typescript/overview.html#volar-takeover-mode)

#### eslint/prettier

以eslint检查代码规范，以prettier统一代码风格，并在保存文件时自动修复错误

修改.prettierrc.json。追加配置，忽略Windows/Linux行结束符`CRLF/LF`的差异

```json
{
    "endOfLine": "auto"
}
```

修改.esintrc.cjs，取消跳过自动格式化

```json
{
    '@vue/eslint-config-prettier'
}
```

项目.vscode目录下，创建settings.json。声明项目vscode配置

```json
{
  "editor.fontSize": 16,
  "window.zoomLevel": 1.0,
  "editor.wordWrap": "on", 
  "editor.codeActionsOnSave": {
    "source.fixAll.eslint": true,
  },
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