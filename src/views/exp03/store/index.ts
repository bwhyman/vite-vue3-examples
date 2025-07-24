import { createGlobalState } from '@vueuse/core'
import { ref, shallowRef } from 'vue'
import type { Order, Shop } from '../data/homework02'

export const useH2Store = createGlobalState(() => {
  // 缓存包含基本信息的shop列表
  const shopListS = shallowRef<Shop[]>([])
  // 缓存shop下商品列表
  const shopMap = new Map<string, Shop>()
  const ordersS = ref<Order[]>([])
  return {
    shopListS,
    shopMap,
    ordersS
  }
})
