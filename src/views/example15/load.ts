import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/datasource/Types'

export const load = () => {
  return new Promise<Course[]>((reslove) => {
    setTimeout(() => {
      reslove(listCourses())
    }, 2000)
  })
}
