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
  </div>
</template>
<script lang="ts" setup>
import { watch } from 'vue'
// 地址参数的属性，必须是string类型
interface Props {
  sid: string
  hid: string
}

let props = defineProps<Props>()
console.log(
  `首次进入加载，2次连续切换组件不再加载，直接复用。sid: ${props.sid}; hid: ${props.hid}`
)

// 可监听传入参数的改变，基于新参数完成网络请求等逻辑操作
watch(props, () => {
  console.log(`sid: ${props.sid}; hid: ${props.hid}`)
})
</script>
