<template>
  <div>
    <h1>Pinia</h1>
    <img
      src="https://pinia.vuejs.org/logo.svg"
      alt="pinia"
      style="width: 100px"
    />
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
    第1个数字没有变化，引入为组件变量后，失去响应。
    <br />
    第2个数字，直接绑定state数据，具有响应。
    <br />
    {{ countUnresponsive }} / {{ store.count }}
    <br />
    与vuex相似，store中state中数据是响应式，因此可直接绑定到视图。
    <br />
    <button @click="increment">increment</button>
    <h1>storeToRefs()</h1>
    可替代computed()函数，从store对象中解构出state数据并保持响应式。
    <br />
    {{ countRef }}
    <hr />
    <p>
      {{ userC?.name }} / {{ userC?.address }}
      <br />
      也可直接绑定到视图，而无需computed()函数引入为本地变量。
      <br />
      {{ store.user?.name }} / {{ store.user?.address }}
    </p>
    <hr />
    <p>
      由于vue3基于proxy代理对象实现响应式，因此无需使用vuex的同步事件更新state数据。
    </p>
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
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'
const store = useStore()
// 失去响应
const countUnresponsive = store.count
const increment = () => store.count++

// const { count } = storeToRefs(store)
const countRef = storeToRefs(store).count

const userC = computed(() => store.user)
// proxy代理对象
console.log(store.user)

// 创建一个用于双向绑定的响应式对象
const myUser = ref<User>({})

const updateUser = () => {
  if (store.user) {
    // 取出双向绑定对象中的属性值，值赋给state中对象的属性
    // 而非直接传递对象
    store.user.name = myUser.value.name
    store.user.address = myUser.value.address

    // myUser.value的值为proxy代理对象，直接赋值给state后，会变为双向绑定，随输入即时更新
    // store.state.user = myUser.value
  }
}
</script>
