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

export const getCourseMock = async (cid: number): Promise<Course> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const course = listCourses().find((c) => c.id === cid)
      resolve(course!)
    }, 1000)
  })
}

export const delCourseMock = async (cid: number): Promise<Course[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      const courses = listCourses()
      const c = courses.find((cs) => cs.id === cid)
      let index = 0
      c && (index = courses.indexOf(c))
      courses.splice(index, 1)
      resolve(courses)
    }, 1000)
  })
}
