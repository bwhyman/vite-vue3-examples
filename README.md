# Frameworks for Web Application - Vite-Vue3

### Overview

China, Northeast Forestry University, Software Engineering, Frameworks for Web Application.

Web系统框架，是东北林业大学软件工程专业第6学期的一门专业选修课。  
主讲教师：王波老师

课程前部分，基于Vite/Vue3框架的前端MVVM设计模式、组件化设计与单页面开发技术。  
课程后部分，基于springboot/spring-cloud框架的后端微服务架构、设计思想与实现技术。  

### Development Environments

开发环境/框架及版本

- VS Code
- Node.js ^20
- Vue ^3.4
- VueUse ^10 (替代Pinia/Axios)

### Documents

环境配置较复杂，先看这里

- [Home.md](Home.md)

### Course Details

[在线课程](https://mooc1-1.chaoxing.com/course/208931964.html)

### Homeworks & Experiments
[Homeworks](./homework.md)  
[Experiments](./experiments.md) 

### Related Courses

- https://github.com/bwhyman/java-course
- https://github.com/bwhyman/springboot-course
- https://github.com/bwhyman/vite-vue3-examples
- https://github.com/bwhyman/flutter_examples

### Update
#### 2024.05.12
避免页面出现y轴滚动条时使主区域`左移`。  
全屏loading遮罩下禁止滚动。

#### 2024.03.27
作业：Checkbox双向互交绑定；函数式全屏Loading遮罩组件

#### 2024.03.04
必须安装Node ^20。   
vue更新至3.4。  
更新vs code插件及配置。vue引入最新vs code插件`vue-official`替代`volar`，取消了TS的take over接管模式以提高性能。

#### 2024.01.22
重构。引入VueUse替代Pinia/Axios。
基于useFetch()函数的全局异常处理比axios麻烦，需要封装。      
几乎所有数据对象都是响应式的，会不会太重没必要？  

#### 2024.01.13
store仅用于响应式数据缓存，创建service封装包含网络请求的业务处理。   
更新依赖。  
Homework03，组件封装与暴露属性。    
Homework04，基于Slot的组件内容扩展。  

#### 2023.06.23 API Mocking
API Mocking移植到mriage

比较了几款API Mocking方案。目的，前端独立开发时模拟后端API请求数据，使用简单学习曲线平缓。

`axios-mock-adapter`，一直不支持获取REST API路径中参数，需手写正则表达式；延迟需手写Promise；返回的是数组，http status code/headers/body按元素顺序封装，别扭的设计。

`MSW`，模拟真实服务器，但基于浏览器的使用模式需要运行并生成独立文件，目的仅在测试及联调下使用，不利于打包部署。

`node express`，真实服务器，但启用支持TS需创建较复杂的独立项目。

`mriage`，功能丰富，甚至支持模拟数据库的CRUD，但也没什么用，自己实现很方便；基于的pretender.js 21年就不再更新PR也无人处理。passthrough()函数在拦截axios请求时无法更新Promise对象中的通知标识，经测试请求数据却已返回，而原生fatch无此问题。

#### 2023.05.18

基于Slot插槽自定义全局权限组件

#### 2023.04.25

Pinia按组合式重构，像一个全局的响应式的没有视图Vue组件

#### 2023.04.22

更新升级依赖

#### 2022.05.17

重构。移除vuex，完全基于pinia使用全局响应式数据。

#### 2022.05.06

基于vue新项目构建方法重构  

路由基于createWebHistory()函数构建的history在生产环境下需要web容器配置  
使用基于createWebHashHistory()函数带#符号的路径解决问题  

#### 2022.05.04

引入新状态管理库pinia

#### 2022.04.26

更新vite/vue/vue-router/vuex版本

#### 2021.12.13

使用原生JS+HTML+Proxy代理类，模拟实现视图响应式更新  

#### 2021.11.15

基于vite重构，引入vue3.2 script-setup等特性。  
由于没有脚手架，许多基本模板文件/配置文件得自己写，希望官方尽快完善。