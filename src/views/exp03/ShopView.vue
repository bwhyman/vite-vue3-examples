<template>
  <div>
    <h3 style="margin: 0">{{ shopR?.name }}</h3>
    <div style="padding: 5px" v-for="(item, index) of shopR?.items" :key="index">
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
import { getOrdersService, getShopService } from './service'
import { useRoute } from 'vue-router'
const params = useRoute().params
const shopR = ref<Shop>()

getShopService(params.sid as string).then((sh) => {
  shopR.value = sh
})

const orderS = getOrdersService()
//
const add = (item: Item) => {
  let order = orderS.value.find((o) => o.item.id == item.id)
  if (order) {
    order.quantity++
  } else {
    // 对应item的order不存在，创建订单对象，加入订单列表
    // 由于没有修改orders数组对象本身，可以不通过vuex事件
    order = { quantity: 1, item: item }
    orderS.value.push(order)
  }
}
const remove = (item: Item) => {
  const order = orderS.value.find((o) => o.item.id == item.id)
  if (order) {
    if (--order.quantity == 0) {
      orderS.value.splice(orderS.value.indexOf(order), 1)
    }
  }
}
const orderQ = computed(() => (item: Item) => {
  const o = orderS.value.find((o) => o.item.id == item.id)
  return o?.quantity ?? 0
})
</script>
<style scoped>
.card {
  display: inline-block;
  vertical-align: top;
}
</style>
