import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/type'

export const listCoursesService = async (): Promise<Course[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(listCourses()), 4000)
  })
}
