import { listCourses } from '@/datasource/DataSource'
import { useExample09Store } from './Example09Store'
import { storeToRefs } from 'pinia'

export const listCoursesService = () => {
  const coursesS = storeToRefs(useExample09Store()).coursesS
  const coursesT = listCourses()
  setTimeout(() => (coursesS.value = coursesT), 1000)
}
