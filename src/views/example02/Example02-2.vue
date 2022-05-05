<template>
  <div>
    <h1>composition</h1>
    <p>与Composition-API基本示例代码相同，但按逻辑聚合相关操作为独立的函数。</p>
    <h1>useMessage()函数</h1>
    <p>
      创建useMessage()函数，聚合message相关逻辑操作。包括计算属性/函数。
      <br />
      messageRef: {{ messageRef }}
      <br />
      <button type="button" @click="changeMessage">changeMessage</button>
    </p>
    <hr />
    <h1>useUser()函数</h1>
    <p>
      创建useUser()函数，聚合user对象数据相关逻辑操作。包括计算属性/函数。
      <br />
      基于Proxy代理对象能够感知新添加的属性
      <br />
      <button type="button" @click="changeAddress">changeAddress</button>
      <br />
      {{ userRef.name }} / {{ userRef.insertTime }} / {{ userRef.address }}
      <br />
      计算属性返回函数：{{ formatDateFunc(userRef.insertTime || '') }}
    </p>
    <hr />
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/datasource/Types'
import { computed, ref, type Ref } from 'vue'
// 聚合所有与message相关的业务逻辑
// 传入Ref类型响应式对象
function useMessage(msg: Ref<string>) {
  const reversMesage = computed(() => msg.value.split('').reverse().join(''))
  const changeMessage = () => {
    msg.value = 'composition-api'
  }
  return {
    reversMesage,
    changeMessage,
  }
}
// 聚合所有与user相关的业务逻辑
function useUser(user: Ref<User>) {
  const formatDateFunc = computed(
    () => (data: string) => data.replace('T', ' ')
  )
  const changeAddress = () => {
    user.value.address = (Math.random() * 1000).toFixed(0).toString()
  }
  return {
    formatDateFunc,
    changeAddress,
  }
}

// 初始化组件数据
const user: User = {
  name: 'BO',
  insertTime: '2046-04-09T11:04:25',
}
// 创建对应的响应式对象
const messageRef = ref('hello world')
const userRef = ref(user)

// 调用独立函数
const { changeMessage } = useMessage(messageRef)
const { formatDateFunc, changeAddress } = useUser(userRef)
</script>
