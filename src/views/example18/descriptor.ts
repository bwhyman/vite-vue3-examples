import type { Ref } from 'vue'

export function StoreCache<T>(dataR: Ref<T>) {
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
export function StoreMapCache<T>(dataR: Ref<Map<any, any>>, indexs: number[]) {
  return (_: any, __: string, descriptor: PropertyDescriptor) => {
    const originalMethod = descriptor.value
    descriptor.value = (...args: any[]) => {
      const val = dataR.value as Map<any, any>
      // if store is Map
      const mapKey = indexs.join('-')
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

// 注入clear函数数组
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
