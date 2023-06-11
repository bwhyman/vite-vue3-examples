import { defineStore } from 'pinia'
import type { Course, ResultVO } from '@/datasource/Types'
import axios from '@/axios'
import { ref } from 'vue'

export const useExample15Store = defineStore('example15', () => {
  // 预支持Suspense，异步加载组件必须包含await阻塞函数
  // async函数自动将结果封装在Promise对象并返回
  const listCoursesA1 = async () => {
    // mock请求模拟延迟2秒
    const resp = await axios.get<ResultVO<{ courses: Course[] }>>('courses')
    // 声明返回类型便于类型推导
    return resp.data.data.courses
  }
  // 数据具体置于state还是返给组件，基于需求灵活决定
  const coursesS = ref<Course[]>([])
  const listCourses2A = async () => {
    const resp = await axios.get<ResultVO<{ courses: Course[] }>>('courses')
    coursesS.value = resp.data.data.courses
    return true
  }

  return {
    listCoursesA1,
    coursesS,
    listCourses2A
  }
})
