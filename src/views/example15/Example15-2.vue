<script lang="ts" setup>
import { defineAsyncComponent, ref } from 'vue'
import { useExample15Store } from './Example15Store'
const courseView2 = defineAsyncComponent(() => import('./CoursesView2.vue'))
const loadingVue = defineAsyncComponent(() => import('@/components/LoadingVue.vue'))

const store = useExample15Store()
// 切换组件的响应式数据
const activeR = ref(false)
store.listCourses2A().then((r) => (activeR.value = r))
</script>
<template>
  <div>
    <p>
      基于component标签，或v-if指令判断。在父组件发出请求，绑定数据，判断数据是否返回，渲染不同组件。
      可基于具体逻辑决定是否使用store中的缓存数据，或将数据传入子组件等。
    </p>
    <div>
      <component :is="activeR ? courseView2 : loadingVue" />
    </div>
    <!-- <div>
      <loadingVue v-if="!activeR" />
      <courseView2 v-if="activeR" />
    </div> -->
  </div>
</template>
