<script lang="ts" setup>
import { useExample15Store } from './Example15Store'
const coursesR = useExample15Store().coursesS
</script>
<template>
  <div>
    <ul>
      <li v-for="(c, index) of coursesR" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
