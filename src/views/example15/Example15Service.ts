import type { Course, ResultVO } from '@/datasource/Types'
import axios from '@/axios'
import { storeToRefs } from 'pinia'
import { useExample15Store } from './Example15Store'

// 预支持Suspense，异步加载组件必须包含await阻塞函数
// async函数自动将结果封装在Promise对象并返回
export const listCoursesService1 = async () => {
  // mock请求模拟延迟2秒
  const resp = await axios.get<ResultVO<{ courses: Course[] }>>('courses')
  // 声明返回类型便于类型推导
  return resp.data.data.courses
}

export const listCoursesService2 = async () => {
  const resp = await axios.get<ResultVO<{ courses: Course[] }>>('courses')
  const coursesS = storeToRefs(useExample15Store()).coursesS
  coursesS.value = resp.data.data.courses
  return true
}
