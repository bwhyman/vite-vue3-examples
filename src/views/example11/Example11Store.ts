import axios from '@/axios'
import type { Course, ResultVO, User } from '@/datasource/Types'
import * as DataSource from '@/datasource/DataSource'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExample11Store = defineStore('example11', () => {
  // example11-1
  const coursesS = ref<Course[]>([])
  const mockCoursesS = ref<Course[]>([])

  const listCoursesA = () => {
    const coursesT = DataSource.listCourses()
    setTimeout(() => (coursesS.value = coursesT), 1000)
  }
  const listMockCoursesA = async (userId: number) => {
    const resp = await axios.get<ResultVO<{ courses: Course[] }>>(`users/${userId}/courses`)
    mockCoursesS.value = resp.data.data?.courses
  }
  const userS = ref<User>({ name: 'BO', address: '925', level: 1 })
  const loginA = async (data: { number: string; password: string }) => {
    // try可避免控制台的未捕获异常信息
    try {
      const resp = await axios.post<ResultVO<{ user: User }>>('login', data)
      console.log(resp.headers.token)
      sessionStorage.setItem('token', resp.headers.token)
      userS.value = resp.data.data?.user
    } catch (error) {
      // eslint默认禁止空执行体。加一段注释或关闭该检测
    }
  }
  const getHomeA = async () => {
    // 未捕获异常，请求失败在控制台输出信息
    const resp = await axios.get<ResultVO<{ courses: Course[] }>>('home')
    coursesS.value = resp.data.data?.courses
  }
  return {
    coursesS,
    mockCoursesS,
    listCoursesA,
    listMockCoursesA,
    userS,
    loginA,
    getHomeA
  }
})
