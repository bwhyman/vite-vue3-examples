<template>
  <div>
    <h1>向子组件传递函数</h1>
    <p>
      方法三。父组件需要执行操作，移除子组件关闭模态框，获取子组件中数据。
      但却需要在子组件中执行。即，执行函数应声明在父组件，但却需要在子组件中调用执行。
      <br />
      方法：在子组件接收属性中声明回调函数，父组件将需要子组件执行的函数传入。
    </p>
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

    <p>{{ courseEditedNameR }}</p>
    <editdialog v-if="activeR" :course="courseEditR" :close="closeItem" :submit="submitItem" />
  </div>
</template>
<script lang="ts" setup>
import type { Course } from '@/type'
import { defineAsyncComponent, ref } from 'vue'
import { listCoursesService2 } from './Example09Service'

const editdialog = defineAsyncComponent(() => import('./EditDialog4.vue'))
const coursesR = ref<Course[]>([])
listCoursesService2().then((cs) => (coursesR.value = cs))
const activeR = ref(false)
const courseEditedNameR = ref('')
const courseEditR = ref<Course>({})
const closeItem = () => (activeR.value = false)
const submitItem = (name: string) => {
  courseEditedNameR.value = name
  activeR.value = false
}
</script>
