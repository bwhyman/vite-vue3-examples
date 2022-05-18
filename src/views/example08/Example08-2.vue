<template>
  <div>
    <h1>Actions</h1>
    <p>
      Actions，值为对象。对象中可声明执行的异步业务函数，以及支持修改state数据
      因为需要通过this获取store对象，因此不能声明为箭头函数。可基于async/await，或返回Promise。
    </p>
    <p>
      {{ userC?.name }} / {{ userC?.address }}
      <br />
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
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
import { useStore } from '@/store'
import { storeToRefs } from 'pinia'

const store = useStore()
// 转为Ref，则state中user引用改变依然可感知
const userRef = storeToRefs(store).user

// 仅感知属性数据改变
const userC = store.user
const myUser = ref<User>({})

const asyncUpdate = () =>
  store.updateUser({
    name: myUser.value.name,
    address: myUser.value.address,
  })

const patch = () =>
  store.$patch((state) => {
    state.user = { name: '直接替换了state中对象' }
    // state.user.name = 'pinia'
  })
</script>
