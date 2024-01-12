import { defineStore } from 'pinia'
import type { Course } from '@/datasource/Types'
import { ref } from 'vue'

export const useExample15Store = defineStore('example15', () => {
  // 数据具体置于state还是返给组件，基于需求灵活决定
  const coursesS = ref<Course[]>([])
  return {
    coursesS
  }
})
