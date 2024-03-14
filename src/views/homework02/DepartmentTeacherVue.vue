<script setup lang="ts">
import { ref, watch, type Ref } from 'vue'
import { listDepartmentsService, listTeachersService } from './services'
import type { Department, Teacher } from './type'

// 暴露的数据需异步获取
// 而在组件加载时，父组件就需要绑定子组件暴露的属性
// 因此暴露属性必须在异步阻塞前声明，并绑定响应式数据，以待后期填充
const teacherR = ref<Teacher>({})
defineExpose<{ teacher: Ref<Teacher> }>({ teacher: teacherR })
// 所有部门，因无需改变定义为非响应式
const departments = await listDepartmentsService()
const teachersR = ref<Teacher[]>([])

// 双向绑定选择的部门
const departmentR = ref<Department>()
// 监听，当部门改变时，异步加载部门下所有教师
watch(departmentR, async () => {
  teacherR.value = {}
  teachersR.value = []
  departmentR.value?.id && (teachersR.value = await listTeachersService(departmentR.value.id))
})

// 也可不使用watch监听，而是通过select的值改变事件获取数据操作
// 默认传入change事件对象，可元素中的值
// const selectDepartment = async (event: Event) => {
//   // 当重新选择部门时，清空上次数据
//   teacherR.value = {}
//   teachersR.value = []
//   teachersR.value = await listTeachersService((event.target as HTMLInputElement).value)
// }
</script>
<template>
  <div>
    <!-- <select style="margin-right: 10px" @change="selectDepartment"> -->
    <select style="margin-right: 10px" v-model="departmentR">
      <option></option>
      <option v-for="(dep, index) of departments" :key="index" :value="dep">
        {{ dep.name }}
      </option>
    </select>
    <select v-model="teacherR" v-if="teachersR.length > 0">
      <option v-for="(teacher, index) of teachersR" :key="index" :value="teacher">
        {{ teacher.name }}
      </option>
    </select>
  </div>
</template>
