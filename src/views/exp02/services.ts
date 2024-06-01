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
    { name: '高级语言程序设计(C++)', term: 2, point: 2.0 },
    { name: 'Python应用', term: 3, point: 2.0 },
    { name: 'Web开发技术', term: 4, point: 2.5 },
    { name: '数字图像处理', term: 5, point: 2.0 },
    { name: 'Web系统框架', term: 5, point: 2.5 },
    { name: '数据仓库与数据挖掘', term: 5, point: 2.5 },
    { name: 'Web前端开发技术', term: 5, point: 2.0 },
    { name: '服务科学与SOA', term: 6, point: 2.0 },
    { name: '企业资源计划', term: 6, point: 2.0 },
    { name: '机器学习', term: 6, point: 2.0 },
    { name: '人工智能导论', term: 6, point: 2.0 },
    { name: '移动终端软件设计', term: 6, point: 2.5 }
  ]
  return courses
}
