<template>
  <div>
    <p>附近的美食</p>
    <div v-for="(shop, index) of shopListR" :key="index" style="min-width: 150px">
      <router-link :to="`/exp03/shops/${shop.id}`" class="router">
        <div class="card">
          <h4>{{ shop.name }}</h4>
          评分：{{ shop.point }}
        </div>
      </router-link>
    </div>
    <router-view />
  </div>
</template>
<script lang="ts" setup>
import { shallowRef } from 'vue'
import type { Shop } from './data/homework02'
import { listShopsService } from './service/index'
const shopListR = shallowRef<Shop[]>([])
// 后期使用阻塞方式更简洁
listShopsService().then(r => (shopListR.value = r.value))
</script>
<style scoped>
* {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}
.router {
  color: #000;
  text-decoration: none;
}
.card {
  padding: 5px;
}
.card:hover {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
