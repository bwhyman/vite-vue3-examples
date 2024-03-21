<template>
  <div class="card">
    <span class="name">{{ props.course.name }}</span>
    <br />
    {{ props.course.createTime }}
  </div>
</template>
<script lang="ts" setup>
import type { Course } from '@/type'
// 声明接收的属性类型
const props = defineProps<{ course: Course }>()
</script>
<style scoped>
.card {
  padding: 10px;
}
.card:hover {
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
.name {
  font-size: 1.2rem;
  font-weight: bold;
}
</style>
