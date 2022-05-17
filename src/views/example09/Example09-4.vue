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
      <tr v-for="(c, index) of courses" :key="index">
        <td>{{ index + 1 }}</td>
        <td>
          {{ c.name }}
        </td>
        <td>{{ c.createTime }}</td>
        <td>
          <button @click=";(courseEdit = c), (active = true)">edit</button>
        </td>
      </tr>
    </table>

    <p>{{ courseEditedName }}</p>
    <editbutton3
      v-if="active"
      :course="courseEdit"
      :close="closeItem"
      :submit="submitItem"
    />
  </div>
</template>
<script lang="ts" setup>
import type { Course } from '@/datasource/Types'
import { useStore } from '@/store'
import { computed, defineAsyncComponent, ref } from 'vue'
const editbutton3 = defineAsyncComponent(() => import('./EditButton3.vue'))
const store = useStore()
store.listCourses()
const courses = computed(() => store.courses)
const active = ref(false)
const courseEditedName = ref('')
const courseEdit = ref<Course>({})

const closeItem = () => (active.value = false)
const submitItem = (name: string) => {
  courseEditedName.value = name
  active.value = false
}
</script>
