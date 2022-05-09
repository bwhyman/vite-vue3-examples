<template>
  <div>
    <div>
      <!-- 基于名称的路由，等效于/homework02/foods -->
      <router-link :to="{ name: 'foods' }" style="text-decoration: none">
        美食
      </router-link>
      |
      <router-link to="/homework02/location" style="text-decoration: none">
        本地
      </router-link>
      |
      <a href="" @click.prevent style="text-decoration: none">跑腿</a>
    </div>
    <p>
      <router-link
        to="/homework02/orders"
        style="text-decoration: none"
        class="order"
      >
        订单：{{ cost }}
      </router-link>
    </p>
    <router-view style="padding: 5px" />
  </div>
</template>
<script lang="ts" setup>
import type { State } from '@/datasource/Types'
import { computed } from 'vue'
import { useStore } from 'vuex'
const store = useStore<State>()
const orders = store.state.orders
// 计算orders中的价格，forEach也可
const cost = computed(() =>
  // reduce(callback, index)类似递归函数；callback函数，pre，前一次结果；cur，当前遍历对象
  orders
    .reduce((pre, cur) => pre + cur.quantity * (cur.item.price ?? 0), 0)
    .toFixed(2)
)
</script>
<style scoped>
.order {
  display: inline-black;
  background: sandybrown;
  border-radius: 5px;
}
</style>
