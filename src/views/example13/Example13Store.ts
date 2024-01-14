import type { User } from '@/type'
import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useExample13Store = createGlobalState(() => {
  const userS = ref<User>({})
  return { userS }
})
