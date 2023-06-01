<script lang="ts" setup>
import { useExample15Store } from './Example15Store'

const store = useExample15Store()
// 预支持Suspense，必须包含await阻塞函数，异步加载组件
// 可基于具体逻辑决定是否使用store中的缓存数据。
const courses = await store.listCoursesA1()
// const courses = await store.listCoursesA()
</script>
<template>
  <div>
    <ul>
      <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
