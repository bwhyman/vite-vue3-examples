<script setup lang="ts">
import { defineAsyncComponent, ref, shallowRef, watch, type Component } from 'vue'

interface LabelStyle {
  color: string
  'text-decoration': string
}

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
const defaultIndex = 0
// 当前加载组件索引
const currentIndexR = ref(defaultIndex)
// 当前加载组件
const currentComponentR = shallowRef(components[defaultIndex].component)
//
const styles: LabelStyle[] = []
const activeStyle: LabelStyle = { color: 'red', 'text-decoration': 'underline' }
const inactiveStyle: LabelStyle = { color: 'black', 'text-decoration': 'none' }
watch(
  currentIndexR,
  cIndex => {
    components.forEach((c, index) => {
      styles[index] = inactiveStyle
      if (cIndex === index) {
        currentComponentR.value = components[cIndex].component
        styles[index] = activeStyle
      }
    })
  },
  { immediate: true }
)
</script>
<template>
  <div>
    <h1>Homework - 组件动态切换</h1>
    <p>无需路由的动态加载组件。切换组件时获取组件索引，更新加载组件以及功能描述文字样式。</p>
    <p>
      <span
        v-for="(c, index) of components"
        :key="index"
        @click="currentIndexR = index"
        class="label"
        :style="{ ...styles[index] }">
        {{ c.name }}
      </span>
    </p>
    <component :is="currentComponentR" />
  </div>
</template>
<style scoped>
.label {
  cursor: pointer;
  margin-right: 10px;
}
</style>
