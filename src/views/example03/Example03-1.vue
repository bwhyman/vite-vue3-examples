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
      defineProps()函数仅能在setup标签中使用，无需引入，运行时会被替换。如果显式未引入错误，配置.eslintrc.js。
      希望尽快出兼容性好的vite-eslint-prettier插件。
      <br />
      通过defineProps()函数获取传入的props，如果通过地址传参，则数据必须时string类型。
    </p>
    studentID: {{ props.sid }}
    <br />
    homeworksID: {{ props.hid }}
    <br />
    缺少一个首次进入且每次数据更新均执行的函数。
    <br />
    声明基于传入数据的逻辑操作，直接调用，且在onBeforeMount()/watch()函数中再次调用
  </div>
</template>
<script lang="ts" setup>
import { onBeforeMount, onBeforeUpdate, watch } from 'vue'
// 地址参数的属性，必须是string类型。控制台显式warning
interface Props {
  sid: string
  hid: string
}

let props = defineProps<Props>()
console.log(
  `首次进入加载，2次连续切换组件不再加载，直接复用。sid: ${props.sid}; hid: ${props.hid}`
)

// 可监听传入参数的改变，基于新参数完成网络请求等逻辑操作
// 但首次进入不会回调
watch(props, () => {
  console.log(`watch. sid: ${props.sid}; hid: ${props.hid}`)
})
// 首次进入不执行，每次数据更新重新渲染前执行回调
// 与watch()函数相似
onBeforeUpdate(() => {
  console.log(`onBeforeUpdate. sid: ${props.sid}; hid: ${props.hid}`)
})
// 仅首次进入挂载到dom前执行，数据更新不执行
onBeforeMount(() => {
  console.log(`onBeforeMount. sid: ${props.sid}; hid: ${props.hid}`)
})

// 缺少一个首次进入且每次数据更新均执行的函数

// 声明基于传入数据的逻辑操作，直接调用，且在onBeforeMount()/watch()函数中再次调用
// const request = () => {
//   console.log(`模拟异步请求函数`)
// }
</script>
