import { defineAsyncComponent, h, render } from 'vue'

// 基于函数动态创建组件，并挂载到节点
// 可声明参数默认值
export const createAlertDialog = (msg: string, close: Function = () => {}) => {
  const dialog = defineAsyncComponent(() => import('./AlertDialog.vue'))
  const vnode = h(dialog, { msg, close })
  render(vnode, document.body)
}
