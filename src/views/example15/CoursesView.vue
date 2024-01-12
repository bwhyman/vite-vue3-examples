<script lang="ts" setup>
import { listCoursesService1 } from './Example15Service'

// 预支持Suspense，必须包含await阻塞函数，异步加载组件
// 可基于具体逻辑决定是否使用store中的缓存数据。
const courses = await listCoursesService1()
</script>
<template>
  <div>
    <ul>
      <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
