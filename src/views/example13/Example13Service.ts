import axios from '@/axios'
import * as consty from '@/datasource/Const'
import router from '@/router'
import type { ResultVO, User } from '@/datasource/Types'
import { storeToRefs } from 'pinia'
import { useExample13Store } from './Example13Store'

export const loginGuardService = async (data: { number: string; password: string }) => {
  // try可避免控制台的未捕获异常信息
  try {
    const resp = await axios.post<ResultVO<{ user: User }>>('login-guard', data)
    sessionStorage.setItem('token', resp.headers.token)
    sessionStorage.setItem('role', resp.headers.role)
    const userS = storeToRefs(useExample13Store()).userS
    userS.value = resp.data.data.user
    let path = '/example13/login'
    switch (resp.headers.role) {
      case consty.USER:
        path = '/example13/user'
        break
      case consty.ADMIN:
        path = '/example13/admin'
        break
    }
    router.push(path)
  } catch (error) {
    // eslint默认禁止空执行体。加一段注释或关闭该检测
  }
}
