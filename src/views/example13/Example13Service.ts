import * as consty from '@/datasource/Const'
import router from '@/router'
import type { User } from '@/type'
import { useExample13Store } from './Example13Store'
import { usePost } from '@/fetch'

export const loginGuardService = async (user: { number: string; password: string }) => {
  const resp = await usePost<{ user: User }>('login-guard', user)
  const token = resp.response.value?.headers.get('token')
  token && sessionStorage.setItem('token', token)
  const role = resp.response.value?.headers.get('role')
  role && sessionStorage.setItem('role', role)
  const userS = useExample13Store().userS
  resp.data.value?.data.user && (userS.value = resp.data.value?.data.user)
  let path = '/example13/login'
  switch (role) {
    case consty.USER:
      path = '/example13/user'
      break
    case consty.ADMIN:
      path = '/example13/admin'
      break
  }
  router.push(path)
}
