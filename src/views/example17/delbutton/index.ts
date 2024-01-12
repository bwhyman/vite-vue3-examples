import type { Course } from '@/datasource/Types'
import { defineAsyncComponent, h, render } from 'vue'

export const createDelConfirmDialog = (course: Course) => {
  const node = h(
    defineAsyncComponent(() => import('./DelConfirmDialog.vue')),
    { course }
  )
  render(node, document.body)
}
