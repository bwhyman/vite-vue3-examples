<template>
  <div>
    <h1>Actions</h1>
    <p>Store中可声明执行的异步业务函数，以及响应式修改state数据</p>
    <p>
      {{ userC?.name }} / {{ userC?.address }}
      <br />
      <input type="text" v-model="myUserR.name" />
      <br />
      <input type="text" v-model="myUserR.address" />
      <br />
      <button type="button" @click="asyncUpdate">asyncUpdate</button>
    </p>
    <hr />
    <h1>$patch()</h1>
    批量更新，对多次响应式数据的更新仅执行一次通知，可注入state对象。
    <br />
    函数直接替换了state中user对象，只有通过storeToRefs()函数转为Ref的user对象可感知更新。
    <br />
    {{ userRef.name }}
    <br />
    <button @click="patch">patch</button>
    <hr />
    <h1>Others</h1>
    Resetting the state, $reset()
    <br />
    Modifiable state, mapWritableState()
    <br />
    Replacing the state, store.$state
    <br />
    Subscribing to the state, $subscribe()
    <br />
    Subscribing to actions, store.$onAction()
    <br />
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/datasource/Types'
import { ref } from 'vue'
import { storeToRefs } from 'pinia'
import { useExample08Store } from './Example08Store'

const store = useExample08Store()
// 转为Ref，则state中user引用改变依然可感知
const userRef = storeToRefs(store).userS
const userC = store.userS
// proxy代理对象
console.log(store.userS)

// 创建一个用于双向绑定的响应式对象
const myUserR = ref<User>({})

const updateUser = () => {
  // 取出双向绑定对象中的属性值，值赋给state中对象的属性
  // 而非直接传递对象
  // user为proxy而非Ref，改变引用会失去响应式。可通过storeToRefs()函数改变
  store.userS.name = myUserR.value.name
  store.userS.address = myUserR.value.address
  // myUser.value的值为proxy代理对象，直接赋值给state后，会变为双向绑定，随输入即时更新
}
const asyncUpdate = () =>
  store.updateUserA({
    name: myUserR.value.name,
    address: myUserR.value.address
  })

const patch = () =>
  store.$patch((state) => {
    //state.user = { name: '直接替换了state中对象' }
    state.userS.name = 'pinia'
  })
</script>
