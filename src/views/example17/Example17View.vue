<script setup lang="ts">
import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/datasource/Types'
import { ref } from 'vue'
import { createDelConfirmDialog } from './delbutton/index'

const coursesR = ref<Course[]>(listCourses())
</script>
<template>
  <div>
    <h1>Functional Components</h1>
    <p>
      独立的删除确认框组件，通过函数渲染，而非声明式渲染。删除按钮引用同一渲染函数，每次打开/销毁同一个确认框对象，并传入所需数据对象。
    </p>
    <table border>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>Op</td>
      </tr>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td><button @click="createDelConfirmDialog(c)">DEL</button></td>
      </tr>
    </table>
    <p>
      既然基于Vue模板的组件文件最终仍会被编译为使用渲染函数渲染，为什么不推荐直接使用基于渲染函数的JSX？
      <br />
      <a
        href="https://cn.vuejs.org/guide/extras/rendering-mechanism.html#templates-vs-render-functions">
        模板 vs. 渲染函数
      </a>
    </p>
  </div>
</template>
