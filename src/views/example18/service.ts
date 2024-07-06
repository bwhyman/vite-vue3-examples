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

  @StoreMapCache(store.courseMapS, [0, 1])
  static async getCourseService(cid: string, pid: string) {
    console.log('call from getCourseService(cid: string)')
    return (await getCourseMock(cid, pid)) as unknown as Course
  }
  @StoreClear(store.clear)
  @StoreCache(store.coursesS)
  static async delCourseService() {
    console.log('call from delCourseService()')
    await delCourseMock()
    return (await listCoursesMock()) as unknown as Ref<Course[]>
  }
}
