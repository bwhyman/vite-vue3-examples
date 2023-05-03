<template>
  <div>
    <h1>reactive()</h1>
    <p>
      reactive()函数，将对象转为响应式对象，不支持基本数据类型，number/boolean等。
      <br />
      {{ user.name }} / {{ user.insertTime }} / {{ user.address }}
      <br />
      按钮绑定的执行函数，在setup()中返回
      <br />
      userReact为代理对象，封装的user对象为响应式。但是，直接改变userReact引用的对象是无效的。
      <br />
      <button @click="changeUserWrong">changeUser not work</button>
      <br />
      刷新页面重新点击。只能修改user对象中的属性，且默认无法添加新属性，即无法获取新的address属性值
      <br />
      <button type="button" @click="changeUserReact">changeUserReact</button>

      <br />
      {{ userReact?.name }} / {{ userReact?.insertTime }} /
      {{ userReact?.address }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/datasource/Types'
import { reactive } from 'vue'
const user: User = {
  name: 'BO',
  insertTime: '2046-04-09T11:04:25'
}
const userAsync: User = {
  name: 'SUN',
  insertTime: '2046-04-09T11:04:25',
  address: '956'
}

let userReact = reactive(user)
console.log(userReact)
// 修改对象引用的函数，在视图执行
// 修改无效，改变对象的引用无法被追踪
const changeUserWrong = () => {
  setTimeout(() => {
    userReact = userAsync
  }, 1000)
}

// 修改响应式对象的属性值，有效
const changeUserReact = () => {
  setTimeout(() => {
    userReact.name = userAsync.name
    userReact.insertTime = userAsync.insertTime
    userReact.address = userAsync.address
  }, 1000)
}
</script>
