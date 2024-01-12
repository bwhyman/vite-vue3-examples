<template>
  <div id="row">
    <sidebar id="sidebar" />
    <router-view id="router" />
  </div>
</template>
<script lang="ts" setup>
import sidebar from '@/views/SideBar.vue'
</script>

<style>
#app {
  width: 960px;
  margin: 10px auto;
}
#row {
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
