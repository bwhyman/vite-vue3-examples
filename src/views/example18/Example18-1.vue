<script setup lang="ts">
import type { Course } from '@/type'
import { UserService } from './service'
import { useExample18Store } from './store'
import { ref } from 'vue'

const result = await Promise.all([UserService.listCoursesService(), UserService.getUserService()])
const coursesR = result[0]
const userR = result[1]
const courseR = ref<Course>()
const getCourseF = async (cid: number) => {
  const course = await UserService.getCourseService(cid)
  console.log(course)
  courseR.value = course
}
const clearF = async () => {
  await UserService.resetService()
  const store = useExample18Store()
  console.log(store.coursesS)
  console.log(store.userS)
  console.log(store.courseMapS)
}

const delCourseF = async (cid: number) => {
  await UserService.delCourseService(cid)
}
</script>
<template>
  <div>
    <p>
      模拟加载时即需要数据渲染的组件，通过阻塞方式绑定全局响应式数据。
      <br />
      加载组件时，调用业务逻辑。
      <br />
      get函数，测试Map数据源。
      <br />
      del函数，测试执行目标业务方法，并将结果重新置于缓存。
      <br />
      clear函数，测试执行指定清空函数
    </p>
    <button @click="clearF">clear</button>
    <br />
    {{ userR?.name }} / {{ courseR?.name }}
    <br />
    <ul>
      <li v-for="(c, index) of coursesR" :key="index">
        {{ c.name }} - /
        <button @click="getCourseF(c.id!)">get</button>
        /
        <button @click="delCourseF(c.id!)">del</button>
      </li>
    </ul>
  </div>
</template>
