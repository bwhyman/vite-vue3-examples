<template>
  <div>
    <h3>useStore()</h3>
    <p>
      useStore()函数必须在setup()中使用。可以传递store对象给自定义use函数。
      <br />
      组件内声明的user变量必须通过计算属性绑定state user。否则state
      user更新，组件user变量不会响应式更新。
    </p>
    <p>
      {{ userS?.name }} / {{ userS?.address }}
      <br />

      也可直接绑定到视图，而无需computed()函数引入为本地变量。
      <br />
      {{ store.state.user?.name }} / {{ store.state.user?.address }}
    </p>
    <hr />
    <p>
      由于vue3基于proxy代理对象实现响应式，因此几乎可以不使用vuex的同步事件更新state数据。
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
import type { State, User } from '@/datasource/Types'
import { computed, ref } from 'vue'
import { useStore } from 'vuex'
const store = useStore<State>()
const userS = computed(() => store.state.user)
// proxy代理对象
console.log(store.state.user)

// 创建一个用于双向绑定的响应式对象
const myUser = ref<User>({})

const updateUser = () => {
  if (store.state.user) {
    // 取出双向绑定对象中的属性值，值赋给state中对象的属性
    // 而非直接传递对象
    store.state.user.name = myUser.value.name
    store.state.user.address = myUser.value.address

    // myUser.value的值为proxy代理对象，直接赋值给state后，会变为双向绑定，随输入即时更新
    // store.state.user = myUser.value
  }
}
</script>
