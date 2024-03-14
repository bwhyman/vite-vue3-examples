<template>
  <div>
    <h3 style="margin: 0">{{ shop?.name }}</h3>
    <div style="padding: 5px" v-for="(item, index) of shop?.items" :key="index">
      <img :src="item.url" alt="" style="width: 200px; padding: 5px" />
      <div class="card">
        {{ item.name }}
        <br />
        价格：{{ item.price }}
        <br />
        月销量：{{ item.sales }}
        <br />
        <button @click="remove(item)">-</button>
        {{ orderQ(item) }}
        <button @click="add(item)">+</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import type { Item, Shop } from './data/homework02'
import { useH2Store } from './store'
import { getShopService } from './service'
interface Props {
  sid: string
}
const props = defineProps<Props>()
const shop = ref<Shop>()

getShopService(Number.parseInt(props.sid)).then((sh) => {
  shop.value = sh
})
const store = useH2Store()
// orders数组对象是响应式，添加移除元素是响应式
const orders = store.ordersS
const add = (item: Item) => {
  let order = orders.value.find((o) => o.item.id == item.id)
  if (order) {
    order.quantity++
  } else {
    // 对应item的order不存在，创建订单对象，加入订单列表
    // 由于没有修改orders数组对象本身，可以不通过vuex事件
    order = { quantity: 1, item: item }
    orders.value.push(order)
  }
}
const remove = (item: Item) => {
  const order = orders.value.find((o) => o.item.id == item.id)
  if (order) {
    const q = order.quantity--
    if (q == 0) {
      orders.value.splice(orders.value.indexOf(order), 1)
    }
  }
}
const orderQ = computed(() => (item: Item) => {
  const o = orders.value.find((o) => o.item.id == item.id)
  return o?.quantity ?? 0
})
</script>
<style scoped>
.card {
  display: inline-block;
  vertical-align: top;
}
</style>
