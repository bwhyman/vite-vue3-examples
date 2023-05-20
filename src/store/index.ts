import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useStore = defineStore('state', () => {
  const exceptionS = ref('')

  return {
    exceptionS
  }
})
