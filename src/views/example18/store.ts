import type { Course, User } from '@/type'
import { ref } from 'vue'

const userS = ref<User>()
const coursesS = ref<Course[]>([])

const store = { userS, coursesS }
export const useUserStore = () => store
