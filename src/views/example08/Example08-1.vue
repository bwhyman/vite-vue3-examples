<template>
  <div>
    <h1>Pinia</h1>
    <img src="https://pinia.vuejs.org/logo.svg" alt="pinia" style="width: 100px" />
    <br />
    https://pinia.vuejs.org/introduction.html
    <br />
    https://github.com/vuejs/pinia
    <br />
    Pinia是替代vuex的下一代状态管理库，更简洁高效。
    <br />
    按官方建议，每一个state数据由一个文件维护，利于构建时打包。粒度不用这么细，相关数据聚合在一起即可。
    <hr />
    <h1>States</h1>
    第1个数字没有变化，基本数据类型直接引入为组件变量后，失去响应性。
    <br />
    第2个数字，store是响应式，因此可直接绑定到视图。
    <br />
    {{ countUnresponsive }} / {{ store.countS }}
    <br />
    <button @click="increment">increment</button>
    <hr />
    <h1>storeToRefs()</h1>
    可替代computed()函数，从store对象中解构出state数据并保持响应式。
    <br />
    {{ countRef }} / {{ countC }}
    <hr />
    <p>
      {{ userC?.name }} / {{ userC?.address }}
      <br />
      也可直接绑定到视图，而无需computed()函数引入为本地变量。
      <br />
      {{ store.userS?.name }} / {{ store.userS?.address }}
    </p>
    <hr />
    <p>
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="updateUser">update</button>
    </p>
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/datasource/Types'
import { computed, ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useExample08Store } from './Example08Store'
const store = useExample08Store()
// store为proxy代理对象。因此store为响应式对象
console.log(store)

// 仅获取了执行时store中count数据，非响应式数据
const countUnresponsive = store.countS
// store为响应式
console.log(store.countS)

const increment = () => store.countS++

// 可通过storeToRefs()函数将state中数据转为Ref响应式类型
// 解构出
// const { count } = storeToRefs(store)
// 或直接获取
const countRef = storeToRefs(store).countS
// 与vuex相似，也可通过计算属性绑定
const countC = computed(() => store.countS)
// Ref类型响应式数据
console.log(countRef)

const userC = store.userS
// proxy代理对象
console.log(store.userS)

// 创建一个用于双向绑定的响应式对象
const myUser = ref<User>({})
const updateUser = () => {
  // 取出双向绑定对象中的属性值，值赋给state中对象的属性
  // 而非直接传递对象
  // user为proxy而非Ref，改变引用会失去响应式。可通过storeToRefs()函数改变
  store.userS.name = myUser.value.name
  store.userS.address = myUser.value.address
  // myUser.value的值为proxy代理对象，直接赋值给state后，会变为双向绑定，随输入即时更新
}
</script>
