import type { State, ResultVO, User } from '@/datasource/Types'
import { listCourses } from '@/datasource/DataSource'
import {
  type MutationTree,
  type ActionTree,
  createStore,
  type GetterTree,
} from 'vuex'
import axios from '@/axios'
import * as vxt from './EventTypes'
import * as consty from '@/datasource/Const'
import router from '@/router'
import { getShop, listShops } from '@/views/homework02/homework02'

const myState: State = {
  user: { name: 'BO', address: '925', level: 1 },
  courses: [],
  shopList: [],
  shopCache: [],
  orders: [],
}

const myMutations: MutationTree<State> = {}

const myActions: ActionTree<State, State> = {
  [vxt.UPDATE_USER]: ({ state }, data: User) => {
    setTimeout(() => {
      if (state.user) {
        state.user.name = data.name
        state.user.address = data.address
      }
    }, 1000)
  },
  [vxt.LIST_COURSES]: ({ state }) => {
    const courses = listCourses()
    setTimeout(() => (state.courses = courses), 1000)
  },
  [vxt.LIST_MOCK_COURSES]: async ({ state }, userId: string) => {
    const resp = await axios.get<ResultVO>(`users/${userId}/courses`)
    state.userCourses = resp.data.data.courses
  },
  [vxt.LOGIN]: async ({ state }, user) => {
    // try可避免控制台的未捕获异常信息
    try {
      const resp = await axios.post<ResultVO>('login', user)
      console.log(resp.headers.token)
      sessionStorage.setItem('token', resp.headers.token)
      state.user = resp.data.data.user
    } catch (error) {
      // eslint默认禁止空执行体。加一段注释或关闭该检测
    }
  },
  [vxt.GET_HOME]: async ({ state }) => {
    // 未捕获异常，请求失败在控制台输出信息
    const resp = await axios.get<ResultVO>('home')
    state.courses = resp.data.data.courses
  },

  'login-guard': async ({ state }, user) => {
    // try可避免控制台的未捕获异常信息
    try {
      const resp = await axios.post<ResultVO>('login-guard', user)
      sessionStorage.setItem('token', resp.headers.token)
      sessionStorage.setItem('role', resp.headers.role)
      state.user = resp.data.data.user
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
  },
  // ------------------- homework
  [vxt.LIST_SHOPS]: ({ state }) => {
    if (state.shopList.length == 0) {
      setTimeout(() => {
        state.shopList = listShops()
      }, 1000)
    }
  },
  [vxt.GET_SHOP]: ({ state }, sid: number) => {
    // 异步加载数据，并更新state中数据
    setTimeout(() => {
      // 返回类型可能为undefined。可强制断言为shop类型
      // state.shopCache.push(getShop(sid)!);
      // &&短路特性。如果shop为空直接结束，不为空执行右表达式
      const shop = getShop(sid)
      shop && state.shopCache.push(shop)
    }, 1000)
  },
}

// getters
const myGetters: GetterTree<State, State> = {
  premission: (state) => (level: number) => state.user?.level == level,
  [vxt.GETTER_PREMISSION]: (state) => (level: number) =>
    state.user?.level == level,
}
export default createStore({
  state: myState,
  mutations: myMutations,
  actions: myActions,
  getters: myGetters,
  modules: {},
})
