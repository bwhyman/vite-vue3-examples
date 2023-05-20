import type { User } from '@/datasource/Types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useExample08Store = defineStore('example08', () => {
  const countS = ref(0)
  const increment = () => countS.value++
  const userS = ref<User>({ name: 'BO', address: '925', level: 1 })

  // Example08-2
  const updateUserA = (data: User) => {
    setTimeout(() => {
      userS.value.name = data.name
      userS.value.address = data.address
    }, 1000)
  }
  // Example08-3，按与vue相同的组合式声明方式
  const doubleCountG = computed(() => countS.value * 2)
  const premissionG = computed(() => (level: number) => userS.value?.level == level)

  return {
    countS,
    increment,
    userS,
    updateUserA,
    doubleCountG,
    premissionG
  }
})
