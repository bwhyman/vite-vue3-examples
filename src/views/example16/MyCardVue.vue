<script setup lang="ts">
import { ref } from 'vue'
const colorR = ref('red')
</script>
<template>
  <div style="border: 1px solid red; border-radius: 5px; display: inline-block">
    <div>
      <h3 style="padding: 0 5px; margin: 5px">
        <slot slotProps="hello world"></slot>
      </h3>
    </div>
    <hr />
    <p :style="{ color: colorR }">
      <slot name="content" :color="colorR"></slot>
    </p>
  </div>
</template>
