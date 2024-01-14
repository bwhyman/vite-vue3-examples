import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import.meta.env.DEV && (await import('@/mock/index'))

const app = createApp(App)
// 全局未捕获异常处理
app.config.errorHandler = (err) => {
  console.log(err)
}
app.use(router)
app.mount('#app')
