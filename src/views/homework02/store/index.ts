import { defineStore } from 'pinia'
import { getShop, listShops, type Order, type Shop } from '../homework02'

export const useH2Store = defineStore('h2', {
  state: () => ({
    shopList: [] as Shop[],
    shopCache: [] as Shop[],
    orders: [] as Order[],
  }),
  actions: {
    async listShops() {
      if (this.shopList.length == 0) {
        setTimeout(() => {
          this.shopList = listShops()
        }, 1000)
      }
    },
    async getShop(sid: number) {
      // 异步加载数据，并更新state中数据
      setTimeout(() => {
        // 返回类型可能为undefined。可强制断言为shop类型
        // state.shopCache.push(getShop(sid)!);
        // &&短路特性。如果shop为空直接结束，不为空执行右表达式
        const shop = getShop(sid)
        shop && this.shopCache.push(shop)
      }, 1000)
    },
  },
})
