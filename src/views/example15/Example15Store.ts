import { defineStore } from 'pinia'
import { listCourses } from '@/datasource/DataSource'
import type { Course, ResultVO } from '@/datasource/Types'
import axios from '@/axios'

export const useExample15Store = defineStore('example15', () => {
  // 预支持Suspense，异步加载组件必须包含await阻塞函数
  const listCourseA = () =>
    new Promise<Course[]>((reslove) => {
      setTimeout(() => {
        reslove(listCourses())
      }, 2000)
    })

  // async函数自动将结果封装在Promise对象并返回
  const listCourseByAxiosA = async (): Promise<Course[]> => {
    // mock请求模拟延迟2秒
    const resp = await axios.get<ResultVO>('courses')
    return resp.data.data.courses
  }
  return {
    listCourseA,
    listCourseByAxiosA
  }
})
