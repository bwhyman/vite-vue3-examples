<script setup lang="ts">
import { defineAsyncComponent, type Component, ref, computed } from 'vue'

const components: { name: string; component: Component }[] = [
  {
    name: '添加用户',
    component: defineAsyncComponent(() => import('./AddUser.vue'))
  },
  {
    name: '移除用户',
    component: defineAsyncComponent(() => import('./DelUser.vue'))
  },
  {
    name: '更新用户',
    component: defineAsyncComponent(() => import('./UpdateUser.vue'))
  }
]
// 加载组件索引
const currentIndexR = ref(0)
// 基于索引动态加载组件
const currentComponentC = computed(() => components[currentIndexR.value]?.component)
// 激活状态组件文字颜色
const activeStyleC = computed(
  () => (index: number) =>
    index == currentIndexR.value
      ? { color: 'red', dec: 'underline' }
      : { color: 'black', dec: 'none' }
)
</script>
<template>
  <div>
    <p>无需路由的动态加载组件。切换组件时获取组件索引，更新加载组件以及功能描述文字样式。</p>
    <p>
      <span
        v-for="(c, index) of components"
        :key="index"
        @click="currentIndexR = index"
        :style="{
          color: activeStyleC(index).color,
          'text-decoration': activeStyleC(index).dec,
          cursor: 'pointer',
          'margin-right': '10px'
        }">
        {{ c.name }}
      </span>
    </p>
    <p>
      <component :is="currentComponentC" />
    </p>
  </div>
</template>
