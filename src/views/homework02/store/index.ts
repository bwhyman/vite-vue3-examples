import { defineStore } from 'pinia'
import type { Order, Shop } from '../data/homework02'
import { ref } from 'vue'

export const useH2Store = defineStore('h2', () => {
  const shopListS = ref<Shop[]>([])
  const shopCacheS = ref<Shop[]>([])
  const ordersS = ref<Order[]>([])

  return {
    shopListS,
    shopCacheS,
    ordersS
  }
})
