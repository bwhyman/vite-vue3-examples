import type { Ref } from 'vue'

/**
 *
 * @param dataR 缓存对象
 * @param replace 默认值false，基于缓存决定是否执行业务方法；true，执行业务方法，并将结果置于缓存
 * @returns 缓存对象，或更新后的缓存对象
 */
export function StoreCache<T>(dataR: Ref<T>, replace = false) {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = (...args: any[]) => {
      const val = dataR.value
      // 响应式对象存在，直接返回
      if (
        !replace &&
        ((Object.prototype.toString.call(val) === '[object Array]' && (val as []).length > 0) ||
          Object.prototype.toString.call(val) === '[object Object]')
      ) {
        console.log('call from store')
        return Promise.resolve(dataR)
      }
      console.log('call from method')
      // 异步执行目标方法并将结果置于store
      return (originalMethod.apply(descriptor, args) as Promise<T>).then(
        (r) => (dataR.value = r) && dataR
      )
    }
    return descriptor
  }
}

/**
 *
 * @param dataR 封装Map类型的响应式对象
 * @param indexs 用于拼接Map键的方法参数索引位置。默认按方法参数顺序拼接键
 * @returns Map中proxy类型元素
 */
export function StoreMapCache<T>(dataR: Ref<Map<any, any>>, indexs?: number[]) {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = (...args: any[]) => {
      const val = dataR.value as Map<any, any>
      // if store is Map
      let mapKey = args.join('-')
      if (indexs) {
        const temp = []
        for (const index of indexs) {
          temp.push(args[index])
        }
        mapKey = temp.join('-')
      }
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
        return val.get(mapKey)
      })
    }
    return descriptor
  }
}

// 注入clear函数
/**
 *
 * @param clears 可变长度参数，在执行修饰方法前执行清空数据函数等操作
 * @returns
 */
export function StoreClear(...clears: Function[]) {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = (...args: any[]) => {
      for (const clear of clears) {
        clear()
      }
      return originalMethod.apply(descriptor, args)
    }
    return descriptor
  }
}
