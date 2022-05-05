import { listCourses } from '@/datasource/DataSource'
import type { Course } from '@/datasource/Types'
import { defineStore } from 'pinia'

export const useCoursesStore = defineStore('courses', {
  state: () => ({ courses: [] as Course[] }),
  actions: {
    async listCourses() {
      setTimeout(() => {
        this.courses = listCourses()
      }, 1000)
    },
  },
})
