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
        <button @click="removeF(item)">-</button>
        {{ getQuantityF(item) }}
        <button @click="addF(item)">+</button>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { shallowRef } from 'vue'
import { useRoute } from 'vue-router'
import type { Item, Shop } from './data/homework02'
import { getOrdersService, getShopService } from './service'
const params = useRoute().params
const shopR = shallowRef<Shop>()

getShopService(params.sid as string).then(sh => {
  shopR.value = sh
})

const orderS = getOrdersService()
//
const addF = (item: Item) => {
  let order = orderS.value.find(o => o.item.id == item.id)
  // 对应item的order不存在，创建订单对象，加入订单列表
  order ? order.quantity++ : orderS.value.push({ quantity: 1, item: item })
}
const removeF = (item: Item) => {
  const order = orderS.value.find(o => o.item.id == item.id)
  order && --order.quantity == 0 && orderS.value.splice(orderS.value.indexOf(order), 1)
}

const getQuantityF = (item: Item) => {
  const o = orderS.value.find(o => o.item.id == item.id)
  return o?.quantity ?? 0
}
</script>
<style scoped>
.card {
  display: inline-block;
  vertical-align: top;
}
</style>
