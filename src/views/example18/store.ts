import type { Course, User } from '@/type'
import { ref } from 'vue'

const userS = ref<User>()
const coursesS = ref<Course[]>([])
const courseMapS = ref<Map<string, Course>>(new Map())

const clear = () => {
  coursesS.value = []
  userS.value = undefined
  courseMapS.value.clear()
}
const store = { userS, coursesS, courseMapS, clear }
export const useExample18Store = () => store
