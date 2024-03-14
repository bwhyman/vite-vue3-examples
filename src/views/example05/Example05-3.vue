<template>
  <div>
    <h1>v-for</h1>
    路由链接是模拟的。
    <br />
    JS中for in(ES5)适合遍历对象的属性及属性值，for of(ES6)适合遍历数组中元素
    <ul>
      <li v-for="(c, index) of coursesR" :key="index">
        <router-link :to="`/courses/${c.id}`">{{ c.name }}</router-link>
      </li>
    </ul>

    <table>
      <thead>
        <tr>
          <th>#</th>
          <th>name</th>
          <th>createTime</th>
          <th>operation</th>
        </tr>
      </thead>
      <tr v-for="(c, index) of coursesR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ c.name }}</td>
        <td>{{ formatDateC(c.createTime ?? '') }}</td>
        <td>
          <button type="button" @click="removeItemF(index)">remove item</button>
        </td>
      </tr>
    </table>

    <button type="button" @click="addItem">add item</button>
  </div>
</template>
<script lang="ts" setup>
import { computed, ref } from 'vue'
import { listCourses } from '@/datasource/DataSource'
const coursesR = ref(listCourses())

const formatDateC = computed(() => (date: string) => date.replace('T', ' ').substring(0, 16))

const addItem = () => {
  coursesR.value.push({
    id: coursesR.value.length + 1,
    name: 'Vue 3.0',
    createTime: new Date().toISOString()
  })
}
const removeItemF = (index: number) => {
  // splice()参数，预删除元素索引，删除之后的几个
  coursesR.value.splice(index, 1)
}
</script>
