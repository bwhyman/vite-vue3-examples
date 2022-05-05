<template>
  <div>
    <h1>defineExpose()</h1>
    <p>
      子组件通过defineExpose()函数对外暴露属性。
      <br />
      可暴露响应式数据，以及函数。
    </p>
    <p>{{ count }}</p>
    <p><input v-model="userR.name" /></p>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'

const userR = ref({ name: '' })
const count = ref(0)
const loop = setInterval(() => {
  count.value++
}, 1000)
// 可以停止循环的函数，但由外部调用
const stopLoop = () => clearInterval(loop)
// 暴露响应式数据，以及预由外部执行的函数
// 声明的类型，属性名称等于传入参数的名称
// 等效{userR: userR, stopLoop: stopLoop}
defineExpose({ userR, stopLoop })
</script>
