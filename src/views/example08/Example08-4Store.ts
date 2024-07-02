import type { User } from '@/type'
import { computed, ref } from 'vue'
// 声明全局响应式数据
const countS = ref(0)
const increment = () => countS.value++
const userS = ref<User>({ name: 'BO', address: '925', level: 1 })
// 声明全局响应式计算属性
const doubleCountG = computed(() => countS.value * 2)
const premissionG = computed(() => (level: number) => userS.value?.level == level)
// 封装为对象
const store = { countS, increment, userS, doubleCountG, premissionG }
// 仅对外暴露获取对象的函数
export const useExample0804Store = () => {
  return store
}
