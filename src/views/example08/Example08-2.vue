<template>
  <div>
    <h1>Vuex Actions</h1>
    <p>
      在actions中声明属性，属性名称可通过常量声明便于维护，属性的值为异步函数。
      函数可接收激活事件传入的参数变量。同时，函数可注入多种对象/函数用于操作。
    </p>
    <p>
      {{ userS?.name }} / {{ userS?.address }}
      <br />
      <input type="text" v-model="myUser.name" />
      <br />
      <input type="text" v-model="myUser.address" />
      <br />
      <button type="button" @click="asyncUpdate">asyncUpdate</button>
    </p>
  </div>
</template>
<script lang="ts" setup>
import type { State, User } from '@/datasource/Types'
import { computed, type Ref, ref } from 'vue'
import { Store, useStore } from 'vuex'
import { UPDATE_USER } from '@/store/EventTypes'

function useAsyncUpdateUser(myUser: Ref<User>, store: Store<State>) {
  const asyncUpdate = () =>
    store.dispatch(UPDATE_USER, {
      name: myUser.value.name,
      address: myUser.value.address,
    } as User)
  return {
    asyncUpdate,
  }
}

const store: Store<State> = useStore()
const userS = computed(() => store.state.user)
const myUser: Ref<User> = ref({})
const { asyncUpdate } = useAsyncUpdateUser(myUser, store)
</script>
