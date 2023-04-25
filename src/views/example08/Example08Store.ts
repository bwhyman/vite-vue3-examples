import type { User } from '@/datasource/Types'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useExample08Store = defineStore('example08', () => {
  const count = ref(0)
  const increment = () => count.value++
  const user = ref<User>({ name: 'BO', address: '925', level: 1 })

  // Example08-2
  const updateUser = (data: User) => {
    setTimeout(() => {
      user.value.name = data.name
      user.value.address = data.address
    }, 1000)
  }
  // Example08-3，按与vue相同的组合式声明方式
  const doubleCount = computed(() => count.value * 2)
  const premissionGetter = computed(() => (level: number) => user.value?.level == level)

  return {
    count,
    increment,
    user,
    updateUser,
    doubleCount,
    premissionGetter
  }
})
