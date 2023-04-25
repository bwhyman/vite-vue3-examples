<template>
  <div>
    <div v-for="(o, index) of orders" :key="index">{{ o.item.name }} / {{ o.quantity }}</div>
  </div>
</template>
<script lang="ts" setup>
import { useH2Store } from './store'
const store = useH2Store()
// 由于state orders中数组已经初始化，数组对象不会改变引用
// 数组中元素是响应式，因此可以不使用computed
const orders = store.ordersS
// const orders = computed(() => store.state.orders);
</script>
