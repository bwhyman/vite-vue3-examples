<script setup lang="ts">
import type { Course } from '@/type'
import { defineAsyncComponent, ref } from 'vue'
import { listCoursesService2 } from './Example09Service'

const editdialog = defineAsyncComponent(() => import('./EditDialog5.vue'))
const coursesR = ref<Course[]>([])
listCoursesService2().then((cs) => (coursesR.value = cs))
const activeR = ref(false)
const courseEditedNameR = ref('')
const courseEditR = ref<Course>({})
const countR = ref(10)
</script>
<template>
  <div>
    <h1>defineModel</h1>
    <p>子组件通过defineModel()函数声明暴露的双向绑定数据，父组件绑定子组件数据至本地响应式数据。</p>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td>createTime</td>
        <td>operation</td>
      </tr>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          {{ c.name }}
        </td>
        <td>{{ c.createTime }}</td>
        <td>
          <button @click=";(courseEditR = c), (activeR = true)">edit</button>
        </td>
      </tr>
    </table>
    <p>{{ countR }} / {{ courseEditedNameR }}</p>
    <editdialog
      v-if="activeR"
      :course="courseEditR"
      v-model:active="activeR"
      v-model:count="countR"
      v-model:coursename="courseEditedNameR" />
  </div>
</template>
