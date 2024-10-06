import { useGet } from '@/fetch'
import type { Course } from '@/type'
import { useExample15Store } from './Example15Store'

// Suspense内的组件，允许包含await阻塞函数异步加载组件
// async函数自动将结果封装在Promise对象并返回
export const listCoursesService1 = async () => {
  // mock请求模拟延迟2秒
  const data = await useGet<Course[]>('courses')
  return data
}

export const listCoursesService2 = async () => {
  const data = await useGet<Course[]>('courses')
  const coursesS = useExample15Store().coursesS
  coursesS.value = data ?? []
  return true
}
