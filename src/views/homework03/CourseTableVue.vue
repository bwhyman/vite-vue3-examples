<script setup lang="ts">
import type { Course } from './type'
// 父组件传入数据
const props = defineProps<{ courses: Course[] }>()
</script>
<template>
  <table border style="border-collapse: collapse">
    <tr>
      <th>#</th>
      <th>课程名称</th>
      <slot name="title"></slot>
    </tr>
    <tr v-for="(course, index) of props.courses" :key="index">
      <td>{{ index + 1 }}</td>
      <td>{{ course.name }}</td>
      <slot name="action" :course="course"></slot>
    </tr>
  </table>
</template>
