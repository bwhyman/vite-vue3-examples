import type { Course, User } from '@/type'
import { ref } from 'vue'

const userS = ref<User>()
const coursesS = ref<Course[]>([])
const courseMapS = ref<Map<string, Course>>(new Map())

const store = { userS, coursesS, courseMapS }
export const useExample18Store = () => store
