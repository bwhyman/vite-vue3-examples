import type { Course } from '@/datasource/Types'

import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExample09Store = defineStore('example09', () => {
  const coursesS = ref<Course[]>([])
  return { coursesS }
})
