<script setup lang="ts">
import { ref } from 'vue'
import { UserService } from './service'
import type { Course, User } from '@/type'
import { useExample18Store } from './store'
const coursesR = ref<Course[]>([])
const userR = ref<User>()
const courseR = ref<Course>()

const listCoursesF = async () => {
  const coursesS = await UserService.listCoursesService()
  console.log(coursesS)
  coursesR.value = coursesS.value
}
const getUserF = async () => {
  const userS = await UserService.getUserService()
  console.log(userS)
  userR.value = userS.value
}

const getCourseF = async () => {
  const course = await UserService.getCourseService('12', '33')
  console.log(course)
  courseR.value = course
}
const clearF = async () => {
  await UserService.delCourseService()
  const store = useExample18Store()
  console.log(store.coursesS)
  console.log(store.userS)
  console.log(store.courseMapS)
}
</script>
<template>
  <div>
    <h1>Decorators</h1>
    <p>
      装饰器(Decorators)，可以拦截`类`中方法的执行，获取改变参数/返回结果/方法调用，是前端TS的AOP切面。
      <br />
      示例通过装饰器拦截业务方法，在装饰器中判断store中是否存在数据，存在则直接返回响应式数据，不实际调用业务方法；不存在则实际调用业务方法，将结果置于store，返回响应式数据。
      <br />
      当多次加载时，仅调用一次业务方法，这种方式可极大简化业务代码。
      <br />
      控制台打印输出类型。
    </p>
    <p>
      <button @click="listCoursesF">listCoursesF</button>
      &
      <button @click="getUserF">getUserF</button>
      &
      <button @click="getCourseF">getCourseF</button>
      &
      <button @click="clearF">clearF</button>
      <br />
      {{ userR?.name }}
      <br />
      <span v-for="(c, index) of coursesR" :key="index">
        {{ c.name }}
        <br />
      </span>
      <br />
      {{ courseR?.name }}
    </p>
  </div>
</template>
