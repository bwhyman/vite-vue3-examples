<template>
  <sidebar id="sidebar" />
  <router-view id="router" />
  <alertdialog v-if="exception && exception.length > 0" />
</template>
<script lang="ts" setup>
import { defineAsyncComponent, computed } from 'vue'
import sidebar from '@/views/SideBar.vue'
import { useStore } from './store'
const alertdialog = defineAsyncComponent(
  () => import('@/components/AlertDialog.vue')
)
const store = useStore()
const exception = computed(() => store.exception)
</script>

<style>
#app {
  margin-top: 10px;
  display: flex;
}

#sidebar {
  width: 300px;
  border: 1px solid red;
  padding: 15px;
}
#router {
  border: 1px solid red;
  flex: 1;
  padding: 15px;
}
</style>
