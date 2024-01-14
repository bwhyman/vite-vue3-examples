<script setup lang="ts">
import type { Course } from '@/type'
import { render } from 'vue'

const props = defineProps<{ course: Course }>()
const close = () => {
  render(null, document.body)
}
</script>
<template>
  <div>
    <div class="modal" @click="close">
      <div class="modal-dialog" @click.stop>
        <div class="modal-header">
          <h3>Confirm</h3>
        </div>
        <div class="modal-content">
          确定删除，
          <span style="color: red; font-weight: bold">{{ props.course.name }}</span>
          ，课程么?
        </div>
        <div class="modal-footer">
          <button>Confirm</button>
        </div>
      </div>
    </div>
  </div>
</template>
<style scoped>
.modal {
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  background: rgba(0, 0, 0, 0.2);
}
/* 模态框容器中的对话框，实际显示操作的部分。显式声明宽度，基于margin自动居中 */
.modal-dialog {
  width: 450px;
  margin: auto;
  background: white;
  top: 30px;
  position: relative;
  border-radius: 5px;
  box-shadow:
    0 4px 8px 0 rgba(0, 0, 0, 0.2),
    0 6px 20px 0 rgba(0, 0, 0, 0.19);
}
/* 加条下线，作为分割线 */
.modal-header {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}

/*改变文字大小*/
.modal-content {
  padding: 15px 15px 30px 15px;
  border-bottom: 1px solid #e5e5e5;
}
.modal-footer {
  text-align: right;
  padding: 15px;
}
</style>
