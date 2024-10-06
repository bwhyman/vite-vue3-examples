import type { ResultVO } from '@/type'
import { createFetch } from '@vueuse/core'

const useFetch = createFetch({
  baseUrl: '/api/',
  options: {
    beforeFetch: ({ options }) => {
      const token = sessionStorage.getItem('token')
      // 避免token数据值为空
      if (token) {
        options.headers = {
          ...options.headers,
          token: token
        }
      }
      return { options }
    },

    afterFetch: (ctx) => {
      // 从响应获取响应体对象
      const data: ResultVO<{}> = ctx.data
      // 全局处理后端返回的异常信息。即，业务状态码不是200
      if (data.code != 200) {
        // 将传递给onFetchError
        return Promise.reject(data.message)
      }
      return ctx
    },
    // 全局处理异常信息。http状态码不是200。
    // 以及afterFetch拒绝后的处理
    // 未捕获异常，传递给全局异常处理
    onFetchError: (ctx) => {
      return Promise.reject(ctx.error)
    }
  }
})
//
// 默认execute()函数通过throwOnFailed属性阻止抛出异常
// 欲支持全局异常处理，必须结合immediate/throwOnFailed
export const useGet = async <T>(url: string) => {
  const resp = useFetch(url, { immediate: false }).get().json<ResultVO<T>>()
  await resp.execute(true)
  return resp.data.value?.data
}

export const usePost = async <T>(url: string, data: unknown) => {
  const resp = useFetch(url, { immediate: false }).post(data).json<ResultVO<T>>()
  await resp.execute(true)
  return resp.data.value?.data
}

export const useLogin = async <T>(url: string, data: unknown) => {
  const resp = useFetch(url, { immediate: false }).post(data).json<ResultVO<T>>()
  await resp.execute(true)
  return resp
}

export const usePut = async <T>(url: string) => {
  const resp = useFetch(url, { immediate: false }).put().json<ResultVO<T>>()
  await resp.execute(true)
  return resp.data.value?.data
}
export const usePatch = async <T>(url: string, data: unknown) => {
  const resp = useFetch(url, { immediate: false }).patch(data).json<ResultVO<T>>()
  await resp.execute(true)
  return resp.data.value?.data
}
export const useDelete = async <T>(url: string) => {
  const resp = useFetch(url, { immediate: false }).delete().json<ResultVO<T>>()
  await resp.execute(true)
  return resp.data.value?.data
}
