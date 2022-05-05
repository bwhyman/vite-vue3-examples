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
        <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import axios from '@/axios'
import type { State, User } from '@/datasource/Types'
import { LIST_MOCK_COURSES } from '@/store/EventTypes'
import { computed, ref } from 'vue'
import { Store, useStore } from 'vuex'

function useUserCourses(store: Store<State>) {
  const choseUser = (userId: number) => {
    store.dispatch(LIST_MOCK_COURSES, userId)
  }
  return {
    choseUser,
  }
}
const user = ref<User>({})
// 发出异步请求，获取结果。没有置于state
axios.get('users/12').then((resp) => {
  user.value = resp.data.data.user
})
const store = useStore<State>()
const courses = computed(() => store.state.userCourses)
const { choseUser } = useUserCourses(store)
</script>
