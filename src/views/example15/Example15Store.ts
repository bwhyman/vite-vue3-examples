import type { Course } from '@/type'
import { createGlobalState } from '@vueuse/core'
import { ref } from 'vue'

export const useExample15Store = createGlobalState(() => {
  // 数据具体置于store还是返给组件，基于需求灵活决定
  const coursesS = ref<Course[]>([])
  return {
    coursesS
  }
})
