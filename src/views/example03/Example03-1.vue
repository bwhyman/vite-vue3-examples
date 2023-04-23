<template>
  <div>
    <h1>defineProps()</h1>
    <p>
      <b>一定在router配置声明启用props支持，否则无法获取数据。</b>
      <br />
      在vue props属性中声明同名变量，声明类型。
      <br />
      但可通过watch函数监听props改变执行回调。
      <br />
      2次连续切换相同组件，默认直接复用组件不再执行setup()函数。
    </p>
    <p>
      defineProps()函数仅能在setup标签中使用，无需引入，运行时会被替换。
      <br />
      通过defineProps()函数获取传入的props，如果通过地址传参，则数据必须时string类型。
    </p>
    studentID: {{ props.sid }}
    <br />
    homeworksID: {{ props.hid }}
    <br />
    watch()函数最后一个参数，可添加参数：immediate：声明即时监听；
    <br />
    watchEffect()函数，首次初始化组件响应式数据时即时执行回调，同时监听响应式对象属性的改变。
  </div>
</template>
<script lang="ts" setup>
import { watchEffect, ref, watch } from 'vue'
// 地址参数的属性，必须是string类型。控制台显式warning
interface Props {
  sid: string
  hid: string
}

let props = defineProps<Props>()
console.log(`连续切换相同组件时，默认直接复用组件，仅执行一次初始化setup()函数`)

// 可监听传入参数的改变，基于新参数完成网络请求等逻辑操作
// watch()函数，默认首次进入时不即时监听
watch(
  props,
  () => {
    console.log(`watch. sid: ${props.sid}; hid: ${props.hid}`)
  },
  { immediate: true }
)

// 可直接监听内部使用的响应式对象及对象属性的改变，且即时监听
watchEffect(() => {
  console.log(`watchEffect. sid: ${props.sid}; hid: ${props.hid}`)
})
</script>
