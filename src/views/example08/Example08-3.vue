<template>
  <div>
    <h1>Getters</h1>
    <p>
      count+1，但是声明的doubleCount属性计算count * 2。
      <br />
      <button @click="store.countS++">count++</button>
      <br />
      {{ dCount }} / {{ store.doubleCount }}
    </p>
    <p>
      getter绑定。声明组件所需权限，与state中保存的用户权限比较，确定是否显式。
      <br />
      <button @click="changePre">changePre</button>
      <br />
      <span v-if="premission(1)">权限为1的普通用户可见</span>
      <span v-if="store.premissionGetter(2)">权限为2的VIP用户可见</span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useStore()
// 可引入为组件变量
// 返回的计算属性的结果，由于数据值为基本数据类型，需保证响应式
const dCount = storeToRefs(store).doubleCount

// 返回的是计算属性返回的函数，无需保证响应式
const premission = store.premissionGetter
const changePre = () => (store.userS.level = store.userS.level == 1 ? 2 : 1)
</script>
