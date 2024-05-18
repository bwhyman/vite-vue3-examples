import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
// import.meta.env.DEV && (await import('@/mock/index'))
import('@/mock/index')
import { createAlertDialog } from '@/components/message'

const app = createApp(App)
app.use(router)
app.mount('#app')

// 全局未捕获异常处理
// 统一弹出错误信息模态框
app.config.errorHandler = (err) => {
  const message = err as string
  console.error(message)
  createAlertDialog(message)
}
