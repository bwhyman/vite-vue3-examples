import type { Course, Title } from '@/type'

const courses: Course[] = [
  { id: 4, name: 'Java程序设计', createTime: '2046-05-10T12:00' },
  { id: 5, name: 'Web开发技术', createTime: '2046-04-10T09:00' },
  { id: 6, name: 'Web系统框架', createTime: '2046-06-10T21:30' },
  { id: 7, name: '移动终端开发技术', createTime: '2046-06-13T18:43' }
]
export function listCourses() {
  return courses
}

export function listTitles() {
  const titles: Title[] = [
    { id: 1, name: '讲师' },
    { id: 2, name: '副教授' },
    { id: 3, name: '教授' }
  ]
  return titles
}
