<script lang="ts" setup>
import OrderCostVue from './OrderCostVue.vue'
</script>
<template>
  <div>
    <h1>Experiment</h1>
    <div>
      <!-- 基于名称的路由，等效于/exp03/foods -->
      <router-link to="/exp03/shoplist" style="text-decoration: none">美食</router-link>
      |
      <router-link to="/exp03/location" style="text-decoration: none">本地</router-link>
      |
      <a href="" @click.prevent style="text-decoration: none">跑腿</a>
    </div>
    <OrderCostVue />
    <router-view style="padding: 5px" />
  </div>
</template>
