<template>
  <div>
    <h1>组件化设计与传参</h1>
    <p>
      组件粒度过粗包含过多内容，会使组件过于臃肿不利于维护。可将部分内容合理分割设计为独立组件。
      <br />
      但组件粒度过细也会增加维护成本。
    </p>
    <p>
      传入的参数可以是代理对象。因此父组件改变数据时，子组件支持响应式改变。
      <br />
      <button @click="changeItem">changeItem</button>
    </p>
    <item v-for="(c, index) of courses" :key="index" :course="c" />
  </div>
</template>
<script lang="ts" setup>
import type { State } from '@/datasource/Types'
import { LIST_COURSES } from '@/store/EventTypes'
import { computed } from 'vue'
import { useStore } from 'vuex'
import item from './Item.vue'
const store = useStore<State>()
store.dispatch(LIST_COURSES)
const courses = computed(() => store.state.courses)
const changeItem = () => {
  store.state.courses?.forEach((c) => (c.name = '响应式改变'))
}
</script>
