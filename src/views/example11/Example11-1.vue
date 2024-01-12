<template>
  <div>
    <div>
      基于路径的字符串匹配，而非正则表达式。
      <br />
      {{ userR.id }} / {{ userR.name }}
    </div>
    <hr />
    <div>
      <!-- .prevent事件修饰符。阻止执行默认事件。即当前阻止超链接默认的跳转 -->
      <a href="" @click.prevent="choseUserF(userR.id!)">
        {{ userR.name }}
      </a>
      <br />
      <ul>
        <li v-for="(c, index) of coursesR" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import axios from '@/axios'
import type { Course, User } from '@/datasource/Types'
import { ref } from 'vue'
import { listCoursesService } from './Example11Service'

const userR = ref<User>({})
const coursesR = ref<Course[]>([])
// 发出异步请求，获取结果。没有置于state
axios.get('users/12').then((resp) => {
  userR.value = resp.data.data.user
})

const choseUserF = async (userId: number) => {
  const courses = await listCoursesService(userId)
  coursesR.value = courses
}
</script>
