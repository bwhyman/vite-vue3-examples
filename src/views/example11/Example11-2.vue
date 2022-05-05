<template>
  <div>
    <div>
      登录后，会在sessionstorage中添加token。再次发出权限请求时，
      从sessionstorage中取出数据再请求中添加在header一起发出。
      <br />
      1001/123456
    </div>
    <div>
      <input type="text" v-model="userForm.number" />
      <br />
      <input type="password" v-model="userForm.password" />
      <br />
      <button title="button" @click="login">Login</button>
      <br />
      {{ user?.title }}
    </div>
    <hr />
    <div>
      <p>
        未登录发出的请求会返回401未登录业务码；token错误返回403无权限业务码，被axios拦截器拦截后激活自定义模态框，弹出错误信息。
        <br />
        测试，需手动在浏览器调试模式，删除application-storage-session
        storage下的token数据
      </p>
      <button type="button" @click="getHome">home</button>
      <br />
      <ul>
        <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { State } from '@/datasource/Types'
import { GET_HOME, LOGIN } from '@/store/EventTypes'
import { computed, type Ref, ref } from 'vue'
import { Store, useStore } from 'vuex'

interface User {
  number?: string
  password?: string
}

function useLogin(userForm: Ref<User>, store: Store<State>) {
  const login = () => {
    const user = {
      number: userForm.value.number,
      password: userForm.value.password,
    }
    store.dispatch(LOGIN, user)
    userForm.value.number = ''
    userForm.value.password = ''
  }
  return {
    login,
  }
}

const store: Store<State> = useStore()
const userForm = ref<User>({})
const { login } = useLogin(userForm, store)
const courses = computed(() => store.state.courses)
const user = computed(() => store.state.user)

const getHome = () => {
  store.dispatch(GET_HOME)
}
</script>
