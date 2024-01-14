<template>
  <div>
    <div>
      基于路径的字符串匹配，而非正则表达式。
      <br />
      {{ userR?.id }} / {{ userR?.name }}
    </div>
    <hr />
    <div>
      <!-- .prevent事件修饰符。阻止执行默认事件。即当前阻止超链接默认的跳转 -->
      <a href="" @click.prevent="choseUserF(userR.id!)">
        {{ userR?.name }}
      </a>
      <br />
      <ul>
        <li v-for="(c, index) of coursesR" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { Course, User } from '@/type'
import { ref } from 'vue'
import { listCoursesService } from './Example11Service'
import { useGet } from '@/fetch'

const userR = ref<User>({})
// 发出异步请求，获取结果。没有置于state
useGet<{ user: User }>('users/12').then((resp) => {
  resp.data.value?.data.user && (userR.value = resp.data.value?.data.user)
})

const coursesR = ref<Course[]>([])
const choseUserF = async (userId: number) => {
  coursesR.value = await listCoursesService(userId)
}
</script>
