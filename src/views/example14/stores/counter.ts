import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({ count: 0 }),
  getters: {
    multiplyCount: (state) => state.count + 1,
    // 同样支持返回函数
    multiplyCountBy: (state) => (p: number) => state.count * p,
  },
})
