<script lang="ts" setup>
import { useExample15Store } from './Example15Store'

const store = useExample15Store()
// 预支持Suspense，必须包含await阻塞函数，异步加载组件
const courses = await store.listCourseByAxiosA()
// const courses = await store.listCourseA()
</script>
<template>
  <div>
    <ul>
      <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
