<script setup lang="ts">
import type { Course } from '@/type'
import { ref } from 'vue'
// 接收的属性
const props = defineProps<{ course: Course }>()
// 组件内双向绑定的课程名称
const courseNameR = ref(props.course.name)
const activeM = defineModel<boolean>('active')
// 可以声明默认值。但必须是组件在setup()初始化前确定的值。
// 即初始值不支持获取props传入的数据
const countM = defineModel('count', { default: 0 })
// 父组件在子组件标签双向绑定声明的属性，因此不支持大小写的驼峰命名
const courseNameM = defineModel<string>('coursename')

// 当关闭时，更新跨组件双向绑定数据
const closeF = () => (activeM.value = false)
const submitF = () => {
  // 提交时再更新父组件双向绑定的数据
  courseNameM.value = courseNameR.value
  closeF()
}
</script>
<template>
  <div class="modal" @click="closeF">
    <div class="modal-dialog" @click.stop>
      <div class="modal-header">
        <h3>Modal title</h3>
      </div>
      <div class="modal-content">
        <p>
          通过vue3.4提供的defineModel()函数，声明组件暴露的双向绑定的数据。
          <br />
          从props传入的对象可以直接渲染：
          <b>
            {{ course.name }}
          </b>
        </p>
        <p>
          双向绑定本地数据，提交时在赋值给双向绑定的父组件。
          <input v-model="courseNameR" />
        </p>
        <p>
          可通过vue的事件修饰符阻止事件的传播等。
          <br />
          <a href="https://v3.cn.vuejs.org/guide/events.html#事件修饰符" target="_blank">
            事件修饰符
          </a>
        </p>
      </div>
      <div class="modal-footer">
        {{ countM }}
        <button class="btn btn-primary" @click="countM++">countR++</button>
        <button class="btn btn-primary" @click="submitF">Save changes</button>
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
.modal .modal-dialog {
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
.modal .modal-header {
  padding: 10px;
  border-bottom: 1px solid #e5e5e5;
}

/*改变文字大小*/
.modal .modal-dialog .modal-content {
  padding: 15px 15px 30px 15px;
  border-bottom: 1px solid #e5e5e5;
}
.modal .modal-dialog .modal-footer {
  text-align: right;
  padding: 15px;
}

.btn {
  display: inline-block;
  padding: 10px 10px;
  margin: 2px;
  color: white;
  background: gray;
  font-size: 1rem;
  border-radius: 3px;
  cursor: pointer;
  border: none;
}
.btn-primary {
  background: #007bff;
}
</style>
