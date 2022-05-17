<template>
  <div>
    <h1>传参</h1>
    <p>
      方法二，单实例。用户未必一定使用子组件，父组件通过v-if延迟加载按钮组件。
      子组件为全部模态框，无需隐藏模态框，由父组件控制是否展示。但子组件必须修改父组件的展示属性变量。
      而子组件无法直接修改父组件数据，即使传入也无法修改。
      <br />
      子组件通过emit()发出指定的事件通知，父组件注册指定事件通知，调用函数在父组件自己改变自己的数据.
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
    <editbutton2
      v-if="active"
      :course="courseEdit"
      @emitClose="active = false"
      @emitSubmit="onEmitSubmit"
    />
  </div>
</template>
<script lang="ts" setup>
import type { Course } from '@/datasource/Types'
import { useStore } from '@/store'
import { computed, defineAsyncComponent, ref } from 'vue'

const editbutton2 = defineAsyncComponent(() => import('./EditButton.vue'))
const store = useStore()
store.listCourses()
const courses = computed(() => store.courses)
const active = ref(false)
const courseEditedName = ref('')
const courseEdit = ref<Course>({})
const onEmitSubmit = (name: string) => {
  active.value = false
  courseEditedName.value = name
}
</script>
