<template>
  <div>
    <h1>Form Binding</h1>
    <form>
      <input type="text" v-model="userR.name" />
      <br />
      <label>
        <input type="radio" v-model="userR.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="userR.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="userR.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="userR.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button type="button">提交</button>
    </form>
    <p>{{ userR }}</p>
    <hr />
    <br />
    <input type="file" @change="fileChangeF" />
    <br />
    <p>{{ fileR.fileName }} / {{ fileR.fileSize }}</p>
    <br />
  </div>
</template>
<script lang="ts" setup>
import { listCourses, listTitles } from '@/datasource/DataSource'
import type { User } from '@/datasource/Types'
import { ref } from 'vue'

const userR = ref<User>({ courses: [] })
const fileR = ref({ fileName: '', fileSize: '' })
const titles = listTitles()
const courses = listCourses()

const fileChangeF = (event: Event) => {
  const element = event.target as HTMLInputElement
  if (!element || !element.files) {
    return
  }
  fileR.value.fileName = element.files[0].name
  fileR.value.fileSize = `${(element.files[0].size / 1024 / 1024).toFixed(2)} MB`
}
</script>
