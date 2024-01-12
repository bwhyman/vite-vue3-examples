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
      {{ userR?.title }}
    </div>
    <div>
      <h3>Pinai</h3>
      调用函数获取pinia
      state数据，必须在pinia加载后执行。因此必须置于router/axios等具体执行函数的内部。
    </div>

    <hr />
    <div>
      <p>
        未登录发出的请求会返回401未登录业务码；token错误返回403无权限业务码，被axios拦截器拦截后激活自定义模态框，弹出错误信息。
        <br />
        测试，需手动在浏览器调试模式，删除application-storage-session storage下的token数据
      </p>
      <button type="button" @click="getHome">home</button>
      <br />
      <ul>
        <li v-for="(c, index) of coursesR" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { useExample11Store } from './Example11Store'
import { getHomeService, loginService } from './Example11Service'
import { storeToRefs } from 'pinia'

interface User {
  number: string
  password: string
}

const userForm = ref<User>({ number: '', password: '' })

const coursesR = storeToRefs(useExample11Store()).coursesS
const userR = storeToRefs(useExample11Store()).userS

const getHome = async () => {
  await getHomeService()
}

const login = async () => {
  const user: User = {
    number: userForm.value.number,
    password: userForm.value.password
  }
  await loginService(user)
  userForm.value.number = ''
  userForm.value.password = ''
}
</script>
