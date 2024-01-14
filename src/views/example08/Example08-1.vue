<template>
  <div>
    <h1>VueUse</h1>
    <img src="https://www.vueusejs.com/favicon.svg" alt="vueusejs" style="width: 100px" />
    <br />
    https://www.vueusejs.com/
    <br />
    vueusejs是一款基于组合式API，整合封装了包括，数据状态管理/网络请求/事件监听等一系列Vue常用功能的函数集合。
    <hr />
    <h1>States</h1>
    与Pinia不同，从store获取转为本地的数据仍具有响应式。
    <br />
    第1个数字，引入为本地变量仍为Ref响应式数据；第2个数字，直接绑定store数据到视图。
    <br />
    {{ countR }} / {{ store.countS }}
    <br />
    <button @click="increment">increment</button>
  </div>
</template>
<script lang="ts" setup>
import { useExample08Store } from './Example08Store'
const store = useExample08Store()
// 与pinia不同，store为普通对象。
console.log(store)
// 与pinia不同，获取到的仍为Ref包裹的基本数据类型
const countR = store.countS
console.log(countR)

// 可直接响应式修改
const increment = () => store.countS.value++
</script>
