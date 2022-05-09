<script lang="ts" setup>
import { load } from './load'

const courses = await load()
</script>
<template>
  <div>
    <ul>
      <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
    </ul>
  </div>
</template>
