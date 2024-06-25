<script setup lang="ts">
import type { Course } from '@/type'
import { shallowRef } from 'vue'

const courseR = shallowRef<Course>()
console.log(courseR)

const course: Course = { id: 10, name: 'Java' }
const getCourseF = () => {
  courseR.value = course
}
const updateCourseF = () => {
  courseR.value && (courseR.value.name = 'web')
}
</script>
<template>
  <div>
    <h1>shallowRef()</h1>
    <p>
      shallowRef()函数属于`浅`响应式。即，更新响应式对象的引用时为响应式，而更新对象属性值则不会响应式更新。
    </p>
    <p>
      <button @click="getCourseF">更新shallowRef中响应式对象的引用，响应式</button>
      <button @click="updateCourseF">更新shallowRef中响应式对象的属性值，非响应式</button>
      <br />
      {{ courseR?.name }}
      <br />
    </p>
  </div>
</template>
