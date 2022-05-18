<template>
  <div>
    <h1>Getters</h1>
    <p>
      count+1，但是声明的doubleCount属性计算count * 2。
      <br />
      <button @click="store.count++">count++</button>
      <br />
      {{ dCount }} / {{ store.doubleCount }}
    </p>
    <p>
      getter绑定。声明组件所需权限，与state中保存的用户权限比较，确定是否显式。
      <br />
      <button @click="changePre">changePre</button>
      <br />
      <span v-if="premission(1)">用户权限为1显示</span>
      <span v-if="store.premissionGetter(2)">用户权限为2显示</span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useStore()
// 可引入为组件变量。由于数据值为基本数据类型，需保证响应式
const dCount = storeToRefs(store).doubleCount

// getter属性返回的是函数，无需保证响应式
const premission = store.premissionGetter
const changePre = () => (store.user.level = store.user.level == 1 ? 2 : 1)
</script>
