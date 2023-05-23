<template>
  <div>
    <h1>Getters</h1>
    <p>
      count+1，但是声明的doubleCount属性计算count * 2。
      <br />
      <button @click="store.countS++">count++</button>
      <br />
      {{ dCount }} / {{ store.doubleCountG }}
    </p>
    <p>
      getter绑定。声明组件所需权限，与state中保存的用户权限比较，确定是否显式。
      <br />
      <button @click="changePre">changePre</button>
      <br />
      <span v-if="premission(1)">权限为1的普通用户可见</span>
      <span v-if="store.premissionG(2)">权限为2的VIP用户可见</span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { useExample08Store } from './Example08Store'
const store = useExample08Store()

// 仅等于当前调用时计算的结果
console.log(store.doubleCountG)
// 可引入为组件变量
// 返回的计算属性的结果，由于数据值为基本数据类型，需保证响应式
const dCount = storeToRefs(store).doubleCountG
console.log(dCount)

// 自动封装为组件计算属性
const premission = storeToRefs(store).premissionG
console.log(premission)

const changePre = () => (store.userS.level = store.userS.level == 1 ? 2 : 1)
</script>
