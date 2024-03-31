<script setup lang="ts">
import { ref } from 'vue'
import type { Course } from './type'
import { listCoursesService } from './service'
import { createLoading } from './loading'
const coursesR = ref<Course[]>([])
const listCoursesF = async () => {
  // 加载全屏遮罩，返回封装关闭函数的对象供显式调用
  const loading = createLoading()
  try {
    coursesR.value = await listCoursesService()
  } finally {
    // 无论请求响应是否异常，均需关闭遮罩。
    loading.close()
  }
}
</script>
<template>
  <div>
    <h1>Homework - 函数式全屏Loading遮罩组件</h1>
    <p>
      网络异步数据请求时，无法确定数据响应时间，在没有提示的情况下会影响用户操作体验，甚至可能发生用户反复提交数据致使操作错误。因此，应设计友好的互交反馈指引用户操作。
    </p>
    <p>
      基于低耦合的函数式渲染，设计实现全屏Loading遮罩组件，在请求前即时加载全屏遮罩提示用户请求进行中，并阻止用户其他操作行为；响应返回后，自动卸载遮罩。
    </p>
    <p>
      全局模态框组件由事件激活卸载(点击关闭)，而Loading组件是随函数的执行(响应数据返回)而卸载，因此需提供卸载函数在合适位置调用执行。
    </p>
    <div>
      <button @click="listCoursesF">异步请求数据，4s响应后自动关闭全屏Loading遮罩</button>
      <ul>
        <li v-for="(c, index) of coursesR" :key="index">{{ c.name }}</li>
      </ul>
    </div>
  </div>
</template>
