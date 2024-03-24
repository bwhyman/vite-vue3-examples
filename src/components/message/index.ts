import { defineAsyncComponent, h, render } from 'vue'

// 基于函数动态创建组件，并挂载到节点
// 可声明close回调函数为可选参数，或默认值
export const createAlertDialog = (msg: string, close?: () => {}) => {
  const dialog = defineAsyncComponent(() => import('./AlertDialog.vue'))
  const vnode = h(dialog, { msg, close })
  render(vnode, document.body)
}
