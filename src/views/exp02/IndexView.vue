<template>
  <div>
    <h1>Experiment</h1>
    <p>专业选修课学分计算</p>
    <p style="font-weight: bold">
      <span :style="{ color: pointR >= requiredPoint ? 'green' : 'red' }">
        {{ pointR }}
      </span>
      /{{ requiredPoint }}学分
    </p>
    <div class="course">
      <template v-for="(c, index) of coursesR" :key="index">
        <label>
          <input type="checkbox" v-model="selectedCoursesR" :value="c" />
          {{ c.term }}学期 / {{ c.point }}学分 / {{ c.name }}
        </label>
        <br />
      </template>
    </div>
    <div class="course">
      <template v-for="(c, index) of selectedCoursesR" :key="index">
        {{ c.term }}学期 / {{ c.point }}学分 / {{ c.name }}
        <br />
      </template>
    </div>
    <div>
      <button @click="clearSelectedF">Reset</button>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { listCourses, type Course } from './services'
import { ref, watch } from 'vue'

const requiredPoint = 12
const pointR = ref(0)
const c2 = listCourses().sort((a, b) => a.term - b.term)
const coursesR = ref<Course[]>(c2)
const selectedCoursesR = ref<Course[]>([])
const clearSelectedF = () => (selectedCoursesR.value.length = 0)
watch(selectedCoursesR, () => {
  pointR.value = 0
  selectedCoursesR.value.forEach((c) => {
    pointR.value += c.point
  })
  selectedCoursesR.value.sort((a, b) => a.term - b.term)
})
</script>
<style scoped>
.course {
  border: 1px solid red;
  padding: 5px;
  display: inline-block;
  vertical-align: top;
}
</style>
./exp01 ./services
