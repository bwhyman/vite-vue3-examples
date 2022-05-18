import axios from '@/axios'
import * as consty from '@/datasource/Const'
import router from '@/router'
import { listCourses } from '@/datasource/DataSource'
import type { Course, ResultVO, User } from '@/datasource/Types'
import { defineStore } from 'pinia'

export const useStore = defineStore('state', {
  state: () => ({
    count: 0,
    user: { name: 'BO', address: '925', level: 1 } as User,
    courses: [] as Course[],
    message: '' as string,
    exception: '' as string,
    mockCourses: [] as Course[],
  }),
  // ---------------- Actions -----------------
  actions: {
    updateUser(data: User) {
      setTimeout(() => {
        this.user.name = data.name
        this.user.address = data.address
      }, 1000)
    },
    listCourses() {
      const courses = listCourses()
      setTimeout(() => (this.courses = courses), 1000)
    },

    async listMockCourses(userId: number) {
      const resp = await axios.get<ResultVO>(`users/${userId}/courses`)
      this.mockCourses = resp.data.data.courses
    },
    async login(user: { number: string; password: string }) {
      // try可避免控制台的未捕获异常信息
      try {
        const resp = await axios.post<ResultVO>('login', user)
        console.log(resp.headers.token)
        sessionStorage.setItem('token', resp.headers.token)
        this.user = resp.data.data.user
      } catch (error) {
        // eslint默认禁止空执行体。加一段注释或关闭该检测
      }
    },
    async getHome() {
      // 未捕获异常，请求失败在控制台输出信息
      const resp = await axios.get<ResultVO>('home')
      this.courses = resp.data.data.courses
    },
    async loginGuard(user: { number: string; password: string }) {
      // try可避免控制台的未捕获异常信息
      try {
        const resp = await axios.post<ResultVO>('login-guard', user)
        sessionStorage.setItem('token', resp.headers.token)
        sessionStorage.setItem('role', resp.headers.role)
        this.user = resp.data.data.user
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
  },

  // ------------ getters ------------------
  getters: {
    doubleCount: (state) => state.count * 2,
    premissionGetter: (state) => (level: number) => state.user?.level == level,
  },
})
