<template>
  <div>
    <h1>defineExpose()</h1>
    <p>父组件通过ref属性绑定获取子组件引用，但仅能使用子组件暴露的属性。</p>
    <p><button @click="exposeR?.stopLoop">执行子组件暴露的函数</button></p>
    <p>{{ exposeR?.userR?.name }}</p>
    <expose ref="exposeR" />
    <hr />
    <p>
      父组件可双向绑定子组件暴露的属性
      <br />
    </p>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import expose from './ExposeLoop3.vue'
// 声明绑定的类型与子组件暴露的类型相同
const exposeR = ref<{ userR?: { name: '' }; stopLoop?: () => void }>({})
</script>
