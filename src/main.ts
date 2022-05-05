import { createPinia } from 'pinia'
import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import.meta.env.DEV && (await import('@/mock/index'))

createApp(App).use(router).use(store).use(createPinia()).mount('#app')
