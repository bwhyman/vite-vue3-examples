import type { User } from '@/type'
import { createGlobalState } from '@vueuse/core'
import { computed, ref } from 'vue'

export const useExample08Store = createGlobalState(() => {
  const countS = ref(0)
  const increment = () => countS.value++
  const userS = ref<User>({ name: 'BO', address: '925', level: 1 })

  // Example08-3，按与vue相同的组合式声明方式
  const doubleCountG = computed(() => countS.value * 2)
  // 基于传入的所需权限，与state中用户权限动态计算比较
  const premissionG = computed(() => (level: number) => userS.value?.level == level)

  return {
    countS,
    increment,
    userS,
    doubleCountG,
    premissionG
  }
})
