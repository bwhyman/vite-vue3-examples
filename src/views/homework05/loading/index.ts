import { defineAsyncComponent, h, render } from 'vue'

export const createLoading = () => {
  const loading = defineAsyncComponent(() => import('./LoadingVue.vue'))
  const vnode = h(loading)
  render(vnode, document.body)
  // 封装关闭函数供外部显式调用
  const close = () => {
    render(null, document.body)
  }
  return { close }
}
