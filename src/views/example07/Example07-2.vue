<template>
  <div>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交。即，等于2项时未选checkboxes变为不可用状态，已选仍为可用状态；不同意，全部为不可用状态。
    </p>
    <p>
      每一个checkbox的可用状态，由当前是否选中/已选数量/是否同意决定，因此必须动态获取checkbox元素对象本身。
      <br />
      HTML元素通过ref属性绑定响应式数组，自动将HTML元素存入；<br />
      声明计算属性，传入当前checkbox在checkboxes数组中的索引，动态计算当前checkbox状态/已选数量等。
    </p>
    <form>
      <label>
        <input type="checkbox" v-model="agreedRef" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) in courses" :key="index">
        <label>
          <input
            ref="checkboxsRef"
            type="checkbox"
            v-model="sCoursesRef"
            :value="{ id: c.id }"
            :disabled="checkboxDisabledC(index)"
          />
          {{ c.name }}
        </label>
        <br />
      </template>
      <br />
      <button type="button" :disabled="!agreedRef || sCoursesRef.length < amount">submit</button>
    </form>
    <p>{{ sCoursesRef }}</p>
  </div>
</template>
<script lang="ts" setup>
import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/datasource/Types'
import { computed, ref } from 'vue'

// 模拟曾经选中的数据
const selectedCourses: Course[] = [{ id: 7 }]
// 将所有动态创建的checkbox元素装入数组
const checkboxsRef = ref<HTMLInputElement[]>([])
// 模拟总数
const amount = 2
// 将拉取的曾选中数据转为响应式
const sCoursesRef = ref<Course[]>(selectedCourses)
// 同意
const agreedRef = ref(false)
// 仅渲染，无需响应式
const courses = listCourses()

// 每一个checkbox disabled值，由agree/当前被选数量/当前元素选中状态，决定
const checkboxDisabledC = computed(() => (index: number) => {
  return (
    !agreedRef.value || (sCoursesRef.value.length >= amount && !checkboxsRef.value[index].checked)
  )
})

// 选中数量，仅影响未选中可用
// watch(sCoursesRef, () => {
//   if (disCheckboxC.value) {
//     checkboxsRef.value
//       .filter((c) => !c.checked)
//       .forEach((c) => (c.disabled = true))
//   } else {
//     checkboxsRef.value.forEach((c) => (c.disabled = false))
//   }
// })

// watch(agreedRef, (newValue) => {
//   if (newValue) {
//     // 同意
//     if (disCheckboxC.value) {
//       // 达到数量，仅启用被选中
//       checkboxsRef.value
//         .filter((c) => c.checked)
//         .forEach((c) => (c.disabled = false))
//     } else {
//       // 未达到数量，
//       checkboxsRef.value.forEach((c) => (c.disabled = false))
//     }
//   } else {
//     // 不同意，全部禁用
//     checkboxsRef.value.forEach((c) => (c.disabled = true))
//   }
// })
</script>
