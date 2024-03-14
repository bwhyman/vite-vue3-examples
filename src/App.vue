<script setup lang="ts">
import SidebarView from '@/views/SidebarView.vue'
</script>
<template>
  <SidebarView id="sidebar" />
  <RouterView id="router" />
</template>
<style>
#app {
  display: flex;
  width: 1200px;
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
