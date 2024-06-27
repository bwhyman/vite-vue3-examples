<script setup lang="ts">
import { computed } from 'vue'
import { getOrdersService } from './service'
const ordersS = getOrdersService()
// 计算orders中的价格，forEach也可
const costC = computed(() =>
  // reduce(callback, index)类似递归函数；callback函数，pre，前一次结果；cur，当前遍历对象
  ordersS.value.reduce((pre, cur) => pre + cur.quantity * (cur.item.price ?? 0), 0).toFixed(2)
)
</script>
<template>
  <div>
    <router-link to="/exp03/orders" class="order">订单：{{ costC }}</router-link>
  </div>
</template>
<style scoped>
.order {
  text-decoration: none;
  display: inline-block;
  padding: 5px;
  background: sandybrown;
  border-radius: 5px;
}
</style>
