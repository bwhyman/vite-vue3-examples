<script setup lang="ts">
import { UserService } from './service'
import { useUserStore } from './store'

const listCoursesF = async () => {
  await UserService.listCoursesService()
}
const getUserF = async () => {
  await UserService.getUserService()
}
const store = useUserStore()
const userR = store.userS
const coursesS = store.coursesS
</script>

<template>
  <div>
    <h1>Decorators</h1>
    <p>
      装饰器(Decorators)，可以拦截`类`中方法的执行，获取改变参数/返回结果/方法调用，是前端TS的AOP切面。
      <br />
      示例通过装饰器拦截业务方法，在装饰器中判断store中是否存在数据，存在则直接返回响应式数据，不实际调用业务方法；不存在则实际调用业务方法，将结果置于store，返回响应式数据。
      <br />
      当多次加载时，仅调用一次业务方法，这种方式极大简化了业务代码。
    </p>
    <p>
      <button @click="listCoursesF">listCoursesF</button>
      &
      <button @click="getUserF">getUserF</button>
      <br />
      {{ userR?.name }}
      <br />
      <span v-for="(c, index) of coursesS" :key="index">
        {{ c.name }}
        <br />
      </span>
    </p>
  </div>
</template>
