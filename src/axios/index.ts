import axios from 'axios'
import store from '@/store'
import type { ResultVO } from '@/datasource/Types'

axios.interceptors.request.use(
  (req) => {
    const auth = sessionStorage.getItem('token')
    // 判断,用于避免header包含authorization属性但数据值为空
    if (auth && req.headers) {
      req.headers.token = auth
    }
    return req
  },
  (error) => {
    store.state.exception = error.message
    return Promise.reject()
  }
)
axios.interceptors.response.use(
  (resp) => {
    // 从响应获取响应体对象
    const data: ResultVO = resp.data
    // 全局处理后端返回的异常信息。即，业务状态码不是200
    if (data.code != 200) {
      store.state.exception = data.message
      return Promise.reject()
    }
    return resp
  },
  // 全局处理异常信息。即，http状态码不是200
  (error) => {
    store.state.exception = error.message
    return Promise.reject()
  }
)

export default axios
