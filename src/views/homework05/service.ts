import type { Course } from './type'

export const listCoursesService = async (): Promise<Course[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(listCourses()), 4000)
  })
}

const listCourses = () => {
  const courses: Course[] = [
    { name: '移动终端设计', id: '15' },
    { name: 'Web前端开发技术', id: '18' },
    { name: 'Java程序设计', id: '32' },
    { name: 'Web系统框架', id: '34' },
    { name: '大数据开发基础', id: '35' },
    { name: 'Python应用', id: '39' },
    { name: 'Web开发技术', id: '41' }
  ]
  return courses
}
