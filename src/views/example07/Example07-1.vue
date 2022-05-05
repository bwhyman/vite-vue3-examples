<template>
  <div>
    <h1>Form Binding</h1>
    <form>
      <input type="text" v-model="user.name" />
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="male" />
        男
      </label>
      <br />
      <label>
        <input type="radio" v-model="user.sex" value="female" />
        女
      </label>
      <br />
      <select v-model="user.title">
        <option v-for="(t, index) of titles" :key="index" :value="{ id: t.id }">
          {{ t.name }}
        </option>
      </select>
      <br />
      <template v-for="(c, index) of courses" :key="index">
        <label>
          <input type="checkbox" v-model="user.courses" :value="{ id: c.id }" />
          {{ c.name }}
        </label>
        <br />
      </template>
      <button type="button">提交</button>
    </form>
    <p>{{ user }}</p>
    <hr />
    <br />
    <input type="file" @change="fileChange" />
    <br />
    <p>{{ file.fileName }} / {{ file.fileSize }}</p>
    <br />
  </div>
</template>
<script lang="ts" setup>
import { listCourses, listTitles } from '@/datasource/DataSource'
import type { User } from '@/datasource/Types'
import { type Ref, ref } from 'vue'

interface VFile {
  fileName: string
  fileSize: string
}
function useFile(file: Ref<VFile>) {
  const fileChange = (event: Event) => {
    const element = event.target as HTMLInputElement
    if (!element || !element.files) {
      return
    }
    file.value.fileName = element.files[0].name
    file.value.fileSize = `${(element.files[0].size / 1024 / 1024).toFixed(
      2
    )} MB`
  }
  return {
    fileChange,
  }
}
const user = ref<User>({ courses: [] })
const file = ref({ fileName: '', fileSize: '' })
const titles = listTitles()
const courses = listCourses()
const { fileChange } = useFile(file)
</script>
