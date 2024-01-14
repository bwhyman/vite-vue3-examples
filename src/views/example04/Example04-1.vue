<template>
  <div>
    <h1>Composition-API</h1>
    <p>
      可直接使用：{{ userRef?.name }} / {{ userRef?.insertTime }} /
      {{ userRef.address }}
    </p>
    <p>
      {{ replaceTime(userRef.insertTime!) }}
      <button @click="changeUser">change user address</button>
    </p>
    <hr />
    <h1>defineProps()</h1>
    <p>
      defineProps()函数仅能在setup标签中使用，无需引入，运行时会被替换。如果显式未引入错误，配置.eslintrc.js。
      希望尽快出兼容性好的vite-eslint-prettier插件。
      <br />
      通过defineProps()函数获取传入的props，如果通过地址传参，则数据必须时string类型。sid:
      {{ props.sid }}
    </p>
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/type'
import { type Ref, ref, computed } from 'vue'
// 地址参数的属性，必须是string类型
interface Props {
  sid: string
  hid: string
}

// 使用setup标签依然可以声明独立的聚合业务逻辑的函数
function useUser(userR: Ref<User>) {
  const changeUser = () => (userR.value.address = (Math.random() * 1000).toFixed(0).toString())
  const replaceTime = computed(() => (time: string) => time.replace('T', ' '))
  return {
    changeUser,
    replaceTime
  }
}

let props = defineProps<Props>()
let userRef = ref<User>({
  name: 'BO',
  insertTime: '2046-04-09T11:04:25'
})

let { changeUser, replaceTime } = useUser(userRef)
</script>
