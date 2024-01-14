<template>
  <div>
    <h1>Navigation Guards</h1>
    <div>
      <p>
        与token的处理相似。登录后，后端在header返回role数据，用于决定指定权限下渲染组件，前后端约定不同角色role值。
        <br />
        为防止用户刷新页面丢失角色权限数据，将role值置于sessionstorage。由于role值可见，前后端可约定无规律role值。
        <br />
        在router路由规则中，为权限组件声明meta附属数据，通过路由守卫判断当前路由组件所需角色与sessionstorage中role是否相符，从而决定渲染，或路由至指定路径，多权限可声明为数组。
      </p>
      <p>
        一般的部署方式，组件被编译为静态js文件部署在静态服务器，且是预加载，用户可越过路由直接查看组件代码。可使用SSR服务器端动态渲染技术。
        <br />
        但用户真实权限在加密的token中，所有权限请求数据后端均会token鉴权。因此，前端即时获取组件也无法操作
      </p>
      <p>
        登录成功后，store基于传回的role值路由至不同路径
        <br />
        user：user/user；admin：admin/admin
      </p>
    </div>
    <div>
      <input type="text" v-model="userForm.number" />
      <br />
      <input type="password" v-model="userForm.password" />
      <br />
      <button title="button" @click="login">Login</button>
      <button @click="clearSessionStorageF">清空SessionStorage用于测试</button>
    </div>
    <router-link to="/example13/user">
      在未登录状态下，试图向user/admin权限地址路由，直接路由至登录组件，且可配置全局警告框。类似基于servlet
      filter的实现。
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import { loginGuardService } from './Example13Service'

const userForm = ref({ number: '', password: '' })

const login = async () => {
  const user = {
    number: userForm.value.number,
    password: userForm.value.password
  }
  await loginGuardService(user)
  userForm.value.number = ''
  userForm.value.password = ''
}
const clearSessionStorageF = () => {
  sessionStorage.clear()
}
</script>
