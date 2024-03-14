/**
 * @author 朱继超
 */
export interface Course {
  name: string // 名称
  term: number // 学期
  point: number // 学分
}

export function listCourses() {
  const courses: Course[] = [
    { name: '移动终端设计', term: 6, point: 2.5 },
    { name: 'Web前端开发技术', term: 4, point: 2.0 },
    { name: 'XML与WebService技术', term: 5, point: 2.0 },
    { name: '算法设计', term: 5, point: 2.0 },
    { name: '服务科学与SOA', term: 6, point: 2.0 },
    { name: '企业资源计划', term: 6, point: 2.0 },
    { name: 'Java程序设计', term: 4, point: 2.5 },
    { name: 'Web系统框架', term: 6, point: 2.5 },
    { name: '大数据开发基础', term: 6, point: 2.5 },
    { name: 'Python应用', term: 6, point: 2.5 },
    { name: 'Web开发技术', term: 5, point: 2.5 },
  ]
  return courses
}
