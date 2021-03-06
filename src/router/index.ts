import {
  createRouter,
  createWebHashHistory,
  type RouteRecordRaw,
} from 'vue-router'
import * as consty from '@/datasource/Const'
import { useStore } from '@/store'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('@/views/example01/Example01.vue'),
  },
  {
    path: '/example02-1',
    component: () => import('@/views/example02/Example02-1.vue'),
  },
  {
    path: '/example02-2',
    component: () => import('@/views/example02/Example02-2.vue'),
  },
  {
    path: '/example02-3',
    component: () => import('@/views/example02/Example02-3.vue'),
  },
  {
    props: true,
    path: '/example03-1/students/:sid/homeworks/:hid',
    component: () => import('@/views/example03/Example03-1.vue'),
  },
  {
    props: true,
    path: '/example04-1/students/:sid/homeworks/:hid',
    component: () => import('@/views/example04/Example04-1.vue'),
  },
  {
    props: true,
    path: '/example05-1',
    component: () => import('@/views/example05/Example05-1.vue'),
  },
  {
    props: true,
    path: '/example05-2',
    component: () => import('@/views/example05/Example05-2.vue'),
  },
  {
    props: true,
    path: '/example05-3',
    component: () => import('@/views/example05/Example05-3.vue'),
  },
  {
    props: true,
    path: '/example06-1',
    component: () => import('@/views/example06/Example06-1.vue'),
  },
  {
    props: true,
    path: '/example06-2',
    component: () => import('@/views/example06/Example06-2.vue'),
  },
  {
    props: true,
    path: '/example07-1',
    component: () => import('@/views/example07/Example07-1.vue'),
  },
  {
    props: true,
    path: '/example07-2',
    component: () => import('@/views/example07/Example07-2.vue'),
  },
  {
    props: true,
    path: '/example08-1',
    component: () => import('@/views/example08/Example08-1.vue'),
  },
  {
    props: true,
    path: '/example08-2',
    component: () => import('@/views/example08/Example08-2.vue'),
  },
  {
    props: true,
    path: '/example08-3',
    component: () => import('@/views/example08/Example08-3.vue'),
  },
  {
    props: true,
    path: '/example09-1',
    component: () => import('@/views/example09/Example09-1.vue'),
  },
  {
    props: true,
    path: '/example09-2',
    component: () => import('@/views/example09/Example09-2.vue'),
  },
  {
    props: true,
    path: '/example09-3',
    component: () => import('@/views/example09/Example09-3.vue'),
  },
  {
    props: true,
    path: '/example09-4',
    component: () => import('@/views/example09/Example09-4.vue'),
  },
  {
    props: true,
    path: '/example10-1',
    component: () => import('@/views/example10/Example10-1.vue'),
  },
  {
    props: true,
    path: '/example10-2',
    component: () => import('@/views/example10/Example10-2.vue'),
  },
  {
    props: true,
    path: '/example11-1',
    component: () => import('@/views/example11/Example11-1.vue'),
  },
  {
    props: true,
    path: '/example11-2',
    component: () => import('@/views/example11/Example11-2.vue'),
  },
  {
    props: true,
    path: '/example11-3',
    component: () => import('@/views/example11/Example11-3.vue'),
  },
  {
    props: true,
    path: '/example12-1',
    component: () => import('@/views/example12/Example12-1.vue'),
    children: [
      {
        // ??????????????????????????????
        // ????????????/example11-01???router-view???????????????????????????????????????
        path: '',
        component: () => import('@/views/example12/CourseAbout.vue'),
      },
      {
        // ????????????????????????????????????????????????????????????????????????
        // /example11-01/course
        path: 'course',
        components: {
          default: () => import('@/views/example12/CourseHome.vue'),
          button: () => import('@/views/example12/AddCourseButton.vue'),
        },
      },
      {
        // ????????????????????????????????????????????????????????????????????????
        path: '/homework',
        components: {
          default: () => import('@/views/example12/CourseHomework.vue'),
          button: () => import('@/views/example12/AddHomeworkButton.vue'),
        },
      },
    ],
  },
  {
    path: '/example13',
    component: () => import('@/views/example13/GuardContainer.vue'),
    children: [
      {
        props: true,
        name: 'login-g',
        path: 'login',
        component: () => import('@/views/example13/GuardLogin.vue'),
      },
      {
        props: true,
        path: 'user',
        component: () => import('@/views/example13/GuardUser.vue'),
        meta: {
          role: consty.USER,
        },
      },
      {
        props: true,
        path: 'admin',
        component: () => import('@/views/example13/GuardAdmin.vue'),
        meta: {
          role: consty.ADMIN,
        },
      },
      {
        name: 'nomatch',
        path: ':pathMatch(.*)*', // ?????????????????????????????????`/`???/:pathMatch(.*)*
        redirect: { name: 'login-g' },
      },
    ],
  },
  {
    props: true,
    path: '/homework01',
    component: () => import('@/views/homework01/Homework01.vue'),
  },
  {
    props: true,
    path: '/example15',
    component: () => import('@/views/example15/Example15-1.vue'),
  },
  // -------------- homework
  {
    props: true,
    path: '/homework02',
    component: () => import('@/views/homework02/Home.vue'),
    children: [
      {
        props: true,
        path: 'location',
        component: () => import('@/views/homework02/Location.vue'),
      },
      {
        props: true,
        name: 'foods',
        path: 'foods',
        component: () => import('@/views/homework02/Foods.vue'),
      },
      {
        props: true,
        path: 'shops/:sid',
        component: () => import('@/views/homework02/Shop.vue'),
      },
      {
        props: true,
        path: 'orders',
        component: () => import('@/views/homework02/Order.vue'),
      },
    ],
  },
]

const router = createRouter({
  // HTML5 Mode???createWebHistory()??????????????????????????????web??????????????????
  // createWebHashHistory()???????????????#?????????????????????
  // history: createWebHistory(import.meta.env.BASE_URL),
  history: createWebHashHistory(),
  routes,
})

router.beforeEach((to, from, next) => {
  // ??????????????????????????????????????????
  if (!to.meta.role) {
    next()
    return
  }

  if (to.meta.role != sessionStorage.getItem('role')) {
    next({ name: 'login-g' })
    // ??????????????????pinia state??????????????????pinia???????????????
    const store = useStore()
    store.exception = '?????????'
    return
  }
  next()
})

export default router
