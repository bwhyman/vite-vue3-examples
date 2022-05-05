<template>
  <div>
    <p>
      与视图元素的绑定与vue2完全不同。需要声明元素，以及绑定函数，在视图元素通过:ref绑定函数
    </p>
    <p>
      需求：必须同意条款才能选择操作以及提交；必须选择2项才能提交；等于2项时checkbox变为不可用状态
    </p>
    <form>
      <label>
        <input type="checkbox" v-model="agreed" />
        同意条款
      </label>
      <br />
      <template v-for="(c, index) in courses" :key="index">
        <label>
          <input
            :ref="chRefs"
            type="checkbox"
            v-model="sCoursesRef"
            :value="{ id: c.id }"
            :disabled="!agreed"
          />
          {{ c.name }}
        </label>
        <br />
      </template>
      <br />
      <button type="button" :disabled="!agreed || sCoursesRef.length < amount">
        submit
      </button>
    </form>
    <p>{{ sCoursesRef }}</p>
  </div>
</template>
<script lang="ts" setup>
import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/datasource/Types'
import { onBeforeUpdate, ref, watch } from 'vue'

// 模拟曾经选中的数据
const selectedCourses: Course[] = [{ id: 7 }]

// HTMLInputElement
// ElementAttrs<HTMLAttributes>
const checkboxs = ref<HTMLInputElement[]>([])
const chRefs = (el: HTMLInputElement) => {
  checkboxs.value.push(el)
}

const amount = 2
const sCoursesRef = ref<Course[]>(selectedCourses)
const agreed = ref(false)
const courses = listCourses()
watch(sCoursesRef, () => {
  const checkboxDis = sCoursesRef.value.length >= amount
  checkboxs.value
    .filter((c) => !c.checked)
    .forEach((c) => (c.disabled = checkboxDis))
})
onBeforeUpdate(() => {
  checkboxs.value = []
})
</script>
