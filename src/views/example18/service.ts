import type { Ref } from 'vue'
import { getUserMock, listCoursesMock } from './mock'
import { useUserStore } from './store'

const store = useUserStore()

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
    console.log('call listCoursesService()')
    return await listCoursesMock()
  }
  @StoreCache(store.userS)
  static async getUserService() {
    console.log('call getUserService()')
    return await getUserMock()
  }
}

function StoreCache<T>(dataR: Ref<T>) {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = (...args: any[]) => {
      const val = dataR.value
      // proxy array. 响应式数组对象存在
      if (Object.prototype.toString.call(val) === '[object Array]') {
        if ((val as Array<T>).length > 0) {
          console.log('call from StoreCache()')
          return dataR
        }
        // 响应式对象不存在
        return (originalMethod.apply(descriptor, args) as Promise<T>).then((r) => (dataR.value = r))
      }
      // 响应式对象不存在
      if (Object.prototype.toString.call(val) === '[object Undefined]') {
        return (originalMethod.apply(descriptor, args) as Promise<T>).then((r) => (dataR.value = r))
      }
      // 响应式对象存在
      if (Object.prototype.toString.call(val) === '[object Object]') {
        console.log('call from StoreCache()')
        return dataR
      }
    }
    return descriptor
  }
}
