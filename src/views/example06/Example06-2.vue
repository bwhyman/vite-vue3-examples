<template>
  <div>
    <h1>Components Dynamic</h1>
    <p>通过component标签:is属性，动态绑定组件</p>

    <h1>keep-alive</h1>
    <p>
      keep-alive标签，支持在组件从DOM移除后缓存组件实例，再次加载时直接使用原实例。即和保存存在原数据。
    </p>
    <button type="button" @click="toggle = !toggle">切换</button>
    <br />
    <keep-alive>
      <component :is="toggle ? namelogin : emaillogin" />
    </keep-alive>
    <br />
    <!-- <keep-alive>
      <namelogin v-if="change" />
      <emaillogin v-if="!change" />
    </keep-alive> -->
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import namelogin from './NameLogin.vue'
import emaillogin from './EmailLogin.vue'
const toggle = ref(false)
</script>
