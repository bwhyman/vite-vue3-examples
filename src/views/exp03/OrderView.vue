<template>
  <div>
    <div v-for="(o, index) of orderS" :key="index">{{ o.item.name }} / {{ o.quantity }}</div>
  </div>
</template>
<script lang="ts" setup>
import { getOrdersService } from './service'
// 数组中元素是响应式，因此可以不使用computed
const orderS = getOrdersService()
</script>
