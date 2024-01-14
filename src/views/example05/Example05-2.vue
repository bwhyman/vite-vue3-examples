<template>
  <div>
    <h1>v-bind</h1>
    <p>v-bind，将指定事件绑定到methods中的方法</p>
    <p>
      <label>
        <input type="checkbox" @click="setAgree" />
        同意以上条款
      </label>
      <br />
      <button type="button" :disabled="submitButtonDisabledRef">提交</button>
    </p>
    <hr />
    <p>也支持直接在事件中声明执行语句</p>
    <p
      @mouseover="activeRef = true"
      @mouseleave="activeRef = false"
      :class="{ 'bg-red': activeRef }">
      元素class属性值与active值绑定， 当鼠标进入/移出时改变active值， 从而动态改变元素样式
    </p>
    <h1>v-bind color</h1>
    <p @mouseover="colorP = 'green'" @mouseleave="colorP = 'red'" class="v-bind-color">
      vue3.2添加通过
      <code>v-bind</code>
      直接绑定css属性功能，可更便捷的修改css属性
    </p>
  </div>
</template>
<script lang="ts" setup>
import { ref, watch } from 'vue'
const submitButtonDisabledRef = ref(true)
const activeRef = ref(false)
// 回调函数支持0/1/2个参数
watch(submitButtonDisabledRef, (newValue: boolean) => alert(`按钮被禁用 ${newValue}`))
const setAgree = () => (submitButtonDisabledRef.value = !submitButtonDisabledRef.value)

const colorP = ref('red')
</script>
<style scoped>
.bg-red {
  background-color: red;
}
.v-bind-color {
  background: v-bind(colorP);
}
</style>
