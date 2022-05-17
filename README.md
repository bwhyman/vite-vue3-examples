# Frameworks for Web Application - Vite-Vue3

### Overview

China, Northeast Forestry University, Software Engineering, Frameworks for Web Application.

Web系统框架，是东北林业大学软件工程专业第6学期的一门专业选修课。  
主讲教师：王波老师

课程前部分，基于Vite/Vue3.0框架的前端MVVM设计模式、组件化设计与单页面开发技术。  
课程后部分，基于springboot/spring-cloud框架的后端微服务架构、设计思想与实现技术。  

Contents:  
pinia/setup/computed/method/script setup/template/route/directives/composition-api/v-bind/v-model/vuex/Passing Data to child component/axios/mock/nested routes/navigation guards

### Development Environments

开发环境/框架及版本

- VS Code
- Node.js ^16
- NPM ^8
- Vue ^3.2
- Pinia ^2.0
- Git ^2.30

### Documents
环境配置较复杂，先看这里

 - [Home.md](Home.md)

### Course Details

在线课程

- https://mooc1-1.chaoxing.com/course/208931964.html

### Related Courses  

- https://github.com/bwhyman/java-course
- https://github.com/bwhyman/springboot-course
- https://github.com/bwhyman/vite-vue3-examples
- https://github.com/bwhyman/flutter_examples

### update 
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
由于没有手脚架，许多基本模板文件配置文件得自己写，希望官方尽快完善。