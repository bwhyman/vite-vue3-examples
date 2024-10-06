import { useGet, useLogin } from '@/fetch'
import type { Course, User } from '@/type'
import { useExample11Store } from './Example11Store'

// example11-1
export const listCoursesService = async (userId: number) => {
  const data = await useGet<Course[]>(`users/${userId}/courses`)
  return data ?? []
}
// example11-2
export const loginService = async (user: { number: string; password: string }) => {
  const resp = await useLogin<User>('login', user)
  const token = resp.response.value?.headers.get('token')
  token && sessionStorage.setItem('token', token)
  const userS = useExample11Store().userS
  resp.data.value?.data && (userS.value = resp.data.value?.data)
}
// example11-2
export const getHomeService = async () => {
  const data = await useGet<Course[]>('home')
  useExample11Store().coursesS.value = data ?? []
}
