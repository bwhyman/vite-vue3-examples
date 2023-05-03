<script lang="ts" setup>
import { defineAsyncComponent } from 'vue'

const asyncview = defineAsyncComponent(() => import('./AsyncView.vue'))

const loadingVue = defineAsyncComponent(() => import('@/components/LoadingVue.vue'))
</script>
<template>
  <div>
    <h1>Suspense</h1>
    <p>
      https://staging-cn.vuejs.org/guide/built-ins/suspense.html
      <br />
      实验性功能。Suspense是一个内置组件，用来在组件树中编排异步依赖。它可以在等待组件树下的多个嵌套异步依赖项解析完成时，呈现加载状态。
      <br />
      当#default插槽中的异步组件没有加载时，自动加载#fallback插槽中组件。异步组件达到可用状态后自动切换。
      <br />
      以下组件内，异步2秒加载数据后达到可用状态。
    </p>
    <suspense>
      <template #default>
        <asyncview />
      </template>
      <template #fallback>
        <loadingVue />
      </template>
    </suspense>
  </div>
</template>
