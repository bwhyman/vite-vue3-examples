<template>
  <div>
    <div>
      基于路径的字符串匹配，而非正则表达式。
      <br />
      {{ user.id }} / {{ user.name }}
    </div>
    <hr />
    <div>
      <!-- .prevent事件修饰符。阻止执行默认事件。即当前阻止超链接默认的跳转 -->
      <a href="" @click.prevent="choseUser(user.id!)">
        {{ user.name }}
      </a>
      <br />
      <ul>
        <li v-for="(c, index) of coursesC" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import axios from '@/axios'
import type { User } from '@/datasource/Types'
import { computed, ref } from 'vue'
import { useExample11Store } from './Example11Store'

const user = ref<User>({})
// 发出异步请求，获取结果。没有置于state
axios.get('users/12').then((resp) => {
  user.value = resp.data.data.user
})
const store = useExample11Store()
const coursesC = computed(() => store.mockCoursesS)
const choseUser = (userId: number) => {
  store.listMockCoursesA(userId)
}
</script>
