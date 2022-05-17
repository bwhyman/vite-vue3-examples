<template>
  <div>
    <h1>Actions</h1>
    <p>Actions属性，支持异步操作，可基于async/await，或返回Promise。</p>
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
    批量更新，支持函数，可注入state对象。
    <br />
    <button @click="patch">patch</button>
    <hr />
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
import { computed, type Ref, ref } from 'vue'
import { useStore } from '@/store'

const store = useStore()
const userC = computed(() => store.user)
const myUser: Ref<User> = ref({})

const asyncUpdate = () =>
  store.updateUser({
    name: myUser.value.name,
    address: myUser.value.address,
  })

const patch = () =>
  store.$patch((state) => {
    state.user.name = 'pinia'
  })
</script>
