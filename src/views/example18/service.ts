import type { Ref } from 'vue'
import { getCourseMock, getUserMock, listCoursesMock } from './mock'
import { useExample18Store } from './store'
import type { Course, User } from '@/type'

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
}

function StoreCache<T>(dataR: Ref<T>) {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = (...args: any[]) => {
      const val = dataR.value

      // 响应式对象存在，直接返回
      if (
        (Object.prototype.toString.call(val) === '[object Array]' && (val as []).length > 0) ||
        Object.prototype.toString.call(val) === '[object Object]'
      ) {
        console.log('call from store')
        return Promise.resolve(dataR)
      }
      console.log('call from method')
      // 响应式对象不存在。异步执行目标方法并将结果置于store
      return (originalMethod.apply(descriptor, args) as Promise<T>).then(
        (r) => (dataR.value = r) && dataR
      )
    }
    return descriptor
  }
}

// p0，Map响应式对象；p1，方法拼接key的参数索引位置
function StoreMapCache<T>(dataR: Ref<Map<any, any>>, indexs: number[]) {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = (...args: any[]) => {
      const val = dataR.value
      // if store is Map
      const keysTemp = []
      for (const i of indexs) {
        keysTemp.push(args[i])
      }
      const mapKey = keysTemp.join('-')
      const mapValue = val.get(mapKey)

      // 响应式对象存在，直接返回
      if (Object.prototype.toString.call(val) === '[object Map]' && mapValue) {
        console.log('call store')
        return Promise.resolve(mapValue)
      }
      console.log('call method')
      // 响应式对象不存在。异步执行目标方法并将结果置于store
      return (originalMethod.apply(descriptor, args) as Promise<T>).then((r) => {
        val.set(mapKey, r)
        return (val as Map<any, any>).get(mapKey)
      })
    }
    return descriptor
  }
}
