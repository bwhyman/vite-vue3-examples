<script setup lang="ts">
import { ref } from 'vue'
const initialTasks = [
  { id: 0, text: '参观卡夫卡博物馆', done: true },
  { id: 1, text: '看木偶戏', done: false },
  { id: 2, text: '打卡列侬墙', done: false }
]

const tasksR = ref(initialTasks)
const isEditsR = ref(Array.from({ length: initialTasks.length }).fill(false))

const newTaskNameR = ref('')
const addTaskF = () => {
  if (!newTaskNameR.value) {
    return
  }
  tasksR.value.push({ id: tasksR.value.length, text: newTaskNameR.value, done: false })
}

const editF = (index: number) => {
  isEditsR.value[index] = !isEditsR.value[index]
}
const deleteF = (index: number) => {
  tasksR.value.splice(index, 1)
}
</script>
<template>
  <div>
    <div style="margin: 10px">
      模拟 React reducer 整合状态逻辑示例。
      <br />
      React 示例拆分为多个细粒度组件，通过 reducer 统一处理数据状态，通过 dispatch函数 发送 action
      事件激活 reducer 的处理逻辑。
      <br />
      React 示例代码更复杂不利于理解，但抽象度更高。抽象剥离组件的处理逻辑又无法复用，是否值得？
    </div>
    <div>
      <h3>布拉格的行程安排</h3>
      <input type="text" placeholder="添加任务" v-model="newTaskNameR" />
      <button @click="addTaskF" :disabled="!newTaskNameR">添加</button>
      <br />
      <ul>
        <li v-for="(task, index) of tasksR" :key="task.id">
          <template v-if="!isEditsR[index]">
            <label>
              <input type="checkbox" v-model="task.done" />
              {{ task.text }}
            </label>
          </template>
          <input v-else type="text" v-model="task.text" />
          <button @click="editF(index)">{{ isEditsR[index] ? '保存' : '编辑' }}</button>
          <button @click="deleteF(index)">删除</button>
        </li>
      </ul>
    </div>
  </div>
</template>
