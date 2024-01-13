import axios from '@/axios'
import type { Course, ResultVO, User } from '@/datasource/Types'
import { useExample11Store } from './Example11Store'
import { storeToRefs } from 'pinia'

export const listCoursesService = async (userId: number) => {
  const resp = await axios.get<ResultVO<{ courses: Course[] }>>(`users/${userId}/courses`)
  return resp.data.data?.courses
}

export const loginService = async (data: { number: string; password: string }) => {
  // try可避免控制台的未捕获异常信息
  try {
    const resp = await axios.post<ResultVO<{ user: User }>>('login', data)
    console.log(resp.headers.token)
    sessionStorage.setItem('token', resp.headers.token)
    const userS = storeToRefs(useExample11Store()).userS
    userS.value = resp.data.data?.user
  } catch (error) {
    // eslint默认禁止空执行体。加一段注释或关闭该检测
  }
}
export const getHomeService = async () => {
  // 未捕获异常，请求失败在控制台输出信息
  const resp = await axios.get<ResultVO<{ courses: Course[] }>>('home')
  return resp.data.data?.courses
}
