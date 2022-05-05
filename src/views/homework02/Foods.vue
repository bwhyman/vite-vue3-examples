<template>
  <div>
    <p>附近的美食</p>
    <div
      v-for="(shop, index) of shopList"
      :key="index"
      style="min-width: 150px"
    >
      <router-link :to="`/homework02/shops/${shop.id}`" class="router">
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
import { useStore } from 'vuex'
import { computed } from 'vue'
import { LIST_SHOPS } from '@/store/EventTypes'
import type { State } from '@/datasource/Types'
const store = useStore<State>()
store.dispatch(LIST_SHOPS)
const shopList = computed(() => store.state.shopList)
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
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
</style>
