import axios from '@/axios'
import * as consty from '@/datasource/Const'
import router from '@/router'
import type { Course, ResultVO, User } from '@/datasource/Types'
import * as DataSource from '@/datasource/DataSource'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useStore = defineStore('state', () => {
  const countS = ref(0)
  const incrementA = () => countS.value++

  const userS = ref<User>({ name: 'BO', address: '925', level: 1 })
  const coursesS = ref<Course[]>([])
  const messageS = ref('')
  const exceptionS = ref('')
  const mockCoursesS = ref<Course[]>([])

  // Example08-2
  const updateUserA = (data: User) => {
    setTimeout(() => {
      userS.value.name = data.name
      userS.value.address = data.address
    }, 1000)
  }

  //
  const listCoursesA = () => {
    const coursesT = DataSource.listCourses()
    setTimeout(() => (coursesS.value = coursesT), 1000)
  }

  const listMockCoursesA = async (userId: number) => {
    const resp = await axios.get<ResultVO>(`users/${userId}/courses`)
    mockCoursesS.value = resp.data.data.courses
  }

  //

  const loginA = async (data: { number: string; password: string }) => {
    // try可避免控制台的未捕获异常信息
    try {
      const resp = await axios.post<ResultVO>('login', data)
      console.log(resp.headers.token)
      sessionStorage.setItem('token', resp.headers.token)
      userS.value = resp.data.data.user
    } catch (error) {
      // eslint默认禁止空执行体。加一段注释或关闭该检测
    }
  }

  const getHomeA = async () => {
    // 未捕获异常，请求失败在控制台输出信息
    const resp = await axios.get<ResultVO>('home')
    coursesS.value = resp.data.data.courses
  }

  //

  const loginGuardA = async (data: { number: string; password: string }) => {
    // try可避免控制台的未捕获异常信息
    try {
      const resp = await axios.post<ResultVO>('login-guard', data)
      sessionStorage.setItem('token', resp.headers.token)
      sessionStorage.setItem('role', resp.headers.role)
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

  // Example08-3，按与vue相同的组合式声明方式
  const doubleCount = computed(() => countS.value * 2)
  const premissionGetter = computed(() => (level: number) => userS.value?.level == level)

  return {
    countS,
    incrementA,
    userS,
    coursesS,
    messageS,
    exceptionS,
    mockCoursesS,
    updateUserA,
    listCoursesA,
    listMockCoursesA,
    loginA,
    getHomeA,
    loginGuardA,
    doubleCount,
    premissionGetter
  }
})
