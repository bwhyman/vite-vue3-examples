import { listCourses } from '@/datasource/DataSource'
import type { Course, User } from '@/type'

export const listCoursesMock = async (): Promise<Course[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(listCourses())
    }, 1000)
  })
}

export const getUserMock = async (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const user: User = { id: 12, name: 'BO' }
      resolve(user)
    }, 1000)
  })
}
