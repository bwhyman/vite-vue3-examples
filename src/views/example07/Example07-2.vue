<template>
  <div>
    <p>
      与视图元素的绑定与vue2完全不同。需要声明元素，以及绑定函数，在视图元素通过ref绑定响应式数组
    </p>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交；等于2项时checkbox变为不可用状态
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
            :disabled="checkboxDisabledC(checkboxsRef[index])"
          />
          {{ c.name }}
        </label>
        <br />
      </template>
      <br />
      <button
        type="button"
        :disabled="!agreedRef || sCoursesRef.length < amount"
      >
        submit
      </button>
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
const checkboxDisabledC = computed(() => (c: HTMLInputElement) => {
  return !agreedRef.value || (sCoursesRef.value.length >= amount && !c.checked)
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
