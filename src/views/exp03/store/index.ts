import { createGlobalState } from '@vueuse/core'
import type { Order, Shop } from '../data/homework02'
import { ref } from 'vue'

export const useH2Store = createGlobalState(() => {
  const shopListS = ref<Shop[]>([])
  const shopCacheS = ref<Shop[]>([])
  const ordersS = ref<Order[]>([])

  return {
    shopListS,
    shopCacheS,
    ordersS
  }
})
