import type { Course, User } from '@/datasource/Types'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExample11Store = defineStore('example11', () => {
  // example11-1
  const coursesS = ref<Course[]>([])
  const userS = ref<User>({ name: 'BO', address: '925', level: 1 })

  return {
    coursesS,
    userS
  }
})
