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
    <editbutton2
      v-if="activeR"
      :course="courseEditR"
      @emitClose="activeR = false"
      @emitSubmit="onEmitSubmit" />
  </div>
</template>
<script lang="ts" setup>
import type { Course } from '@/type'
import { defineAsyncComponent, ref } from 'vue'
import { listCoursesService2 } from './Example09Service'
const editbutton2 = defineAsyncComponent(() => import('./EditButton2.vue'))
// 响应式数据，用于当业务逻辑异步返回数据后，更新组件数据
const coursesR = ref<Course[]>([])
// 获取异步返回数据并响应式更新数据
listCoursesService2().then((cs) => (coursesR.value = cs))
// 动态绑定点击的课程对象，传入对话框组件
const courseEditR = ref<Course>({})
// 对话框组件是否显示
const activeR = ref(false)
// 对话框组件传回的数据
const courseEditedNameR = ref('')
// 监听回调函数
// 当对话框组件指定事件被激活时，回调指定监听函数
const onEmitSubmit = (name: string) => {
  activeR.value = false
  courseEditedNameR.value = name
}
</script>
