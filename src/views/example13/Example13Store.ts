import type { User } from '@/datasource/Types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExample13Store = defineStore('example13', () => {
  const userS = ref<User>({})
  return { userS }
})
