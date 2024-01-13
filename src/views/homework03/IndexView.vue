<script setup lang="ts">
import { defineAsyncComponent, ref } from 'vue'
import type { Teacher } from './type'
const departmentVue = defineAsyncComponent(() => import('./DepartmentTeacherVue.vue'))
const loadingVue = defineAsyncComponent(() => import('@/components/LoadingVue.vue'))
// 响应式绑定组件暴露的数据对象
const departExpose = ref<{ teacher: Teacher }>()
</script>
<template>
  <div>
    <h1>Homework03 - 封装暴露组件数据对象</h1>
    <p>
      选择的教师：
      <span v-if="departExpose?.teacher.id">
        {{ departExpose?.teacher.name }} / {{ departExpose?.teacher.id }}
      </span>
    </p>
    <div>
      <suspense>
        <template #default>
          <!-- 通过ref属性绑定组件暴露的数据对象 -->
          <departmentVue ref="departExpose" />
        </template>
        <template #fallback>
          <loadingVue />
        </template>
      </suspense>
    </div>
  </div>
</template>
