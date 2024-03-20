<template>
  <div>
    <h1>Experiment</h1>
    <p style="font-weight: bold">
      <span :style="{ color: point >= requiredPoint ? 'green' : 'red' }">
        {{ point }}
      </span>
      /{{ requiredPoint }}
    </p>
    <div class="course">
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="courseSelects" :value="c" />
          {{ c.name }} - {{ c.point }} ({{ c.term }})
        </label>
        <br />
      </template>
    </div>
    <div class="course">
      <template v-for="(c, index) of courseSelects" :key="index">
        {{ c.name }} - {{ c.point }} ({{ c.term }})
        <br />
      </template>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { listCourses, type Course } from './services'
import { ref, watch } from 'vue'

const requiredPoint = 12
const point = ref(0)
const c2 = listCourses().sort((a, b) => a.term - b.term)
const courses = ref<Course[]>(c2)
const courseSelects = ref<Course[]>([])
watch(courseSelects, () => {
  let count = 0
  courseSelects.value.forEach((c) => {
    count = count + c.point
  })
  point.value = count
  courseSelects.value.sort((a, b) => a.term - b.term)
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
