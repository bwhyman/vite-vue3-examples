import { defineStore } from 'pinia'
import { getShop, listShops, type Order, type Shop } from '../data/homework02'
import { ref } from 'vue'

export const useH2Store = defineStore('h2', () => {
  const shopListS = ref<Shop[]>([])
  const shopCacheS = ref<Shop[]>([])
  const ordersS = ref<Order[]>([])
  const listShopsA = async () => {
    if (shopListS.value.length == 0) {
      setTimeout(() => {
        shopListS.value = listShops()
      }, 1000)
    }
  }
  const getShopA = async (sid: number) => {
    // 异步加载数据，并更新state中数据
    setTimeout(() => {
      // 返回类型可能为undefined。可强制断言为shop类型
      // state.shopCache.push(getShop(sid)!);
      // &&短路特性。如果shop为空直接结束，不为空执行右表达式
      const shop = getShop(sid)
      shop && shopCacheS.value.push(shop)
    }, 1000)
  }

  return {
    shopListS,
    shopCacheS,
    ordersS,
    listShopsA,
    getShopA
  }
})
