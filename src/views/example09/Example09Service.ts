import { listCourses } from '@/datasource/DataSource'
import { useExample09Store } from './Example09Store'
import type { Course } from '@/type'

export const listCoursesService = () => {
  const coursesS = useExample09Store().coursesS
  // 模拟业务逻辑处理，网络延迟获取数据
  // 获取到数据后响应式改变store中数据
  setTimeout(() => (coursesS.value = listCourses()), 1000)
}

// 不使用store。基于Promise模拟异步函数获取数据，将数据直接返给组件
export const listCoursesService2 = async () => {
  return new Promise<Course[]>((resolve) => {
    setTimeout(() => {
      resolve(listCourses())
    }, 2000)
  })
}
