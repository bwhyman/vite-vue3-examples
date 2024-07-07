import type { Ref } from 'vue'
import { delCourseMock, getCourseMock, getUserMock, listCoursesMock } from './mock'
import { useExample18Store } from './store'
import type { Course, User } from '@/type'
import { StoreCache, StoreClear, StoreMapCache } from './descriptor'

const store = useExample18Store()

// 必须将核心业务包裹在缓存判断之间
// 代码冗余
const listCoursesService = async () => {
  const coursesS = store.coursesS
  if (coursesS.value.length > 0) return coursesS
  coursesS.value = await listCoursesMock()
  return store.coursesS
}

export class UserService {
  // 仅需核心业务代码，缓存判断以AOP切面解耦
  @StoreCache(store.coursesS)
  static async listCoursesService() {
    console.log('call from listCoursesService()')
    return (await listCoursesMock()) as unknown as Ref<Course[]>
  }

  @StoreCache(store.userS)
  static async getUserService() {
    console.log('call from getUserService()')
    return (await getUserMock()) as unknown as Ref<User>
  }

  @StoreMapCache(store.courseMapS)
  static async getCourseService(cid: number) {
    console.log('call from getCourseService(cid: string)')
    return await getCourseMock(cid)
  }

  // 执行目标方法，替换缓存为返回结果
  @StoreCache(store.coursesS, true)
  static async delCourseService(cid: number) {
    console.log('call from delCourseService()')
    const courses = await delCourseMock(cid)
    // 模拟从后端返回的新数组
    return JSON.parse(JSON.stringify(courses)) as unknown as Ref<Course[]>
  }

  @StoreClear(store.clear)
  static async resetService() {}
}
