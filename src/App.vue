<script setup lang="ts">
import SidebarView from '@/views/SidebarView.vue'
</script>
<template>
  <SidebarView id="sidebar" />
  <RouterView id="router" />
</template>
<style>
/* 最宽为全屏-y轴滚动条宽度 */
body {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
  max-width: calc(100vw - 17px);
}
#app {
  display: flex;
  max-width: 1200px;
  margin: 10px auto;
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
