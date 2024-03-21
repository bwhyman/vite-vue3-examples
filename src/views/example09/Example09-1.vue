<template>
  <div>
    <h1>组件化设计与传参</h1>
    <p>
      组件粒度过粗包含过多内容，会使组件过于臃肿不利于维护。可将部分内容合理分割设计为独立组件。
      <br />
      但组件粒度过细也会增加维护成本。
    </p>
    <p>
      传入的参数可以是代理对象。因此父组件改变数据时，子组件支持响应式改变。
      <br />
      <button @click="changeItemF">changeItem</button>
    </p>
    <courseitem v-for="(c, index) of coursesR" :key="index" :course="c" />
  </div>
</template>
<script lang="ts" setup>
import courseitem from './CourseItem1.vue'
import { useExample09Store } from './Example09Store'
import { listCoursesService } from './Example09Service'
// 组件发起业务处理请求
listCoursesService()
// 初始时，store中为空数组。
// 1s后service响应式更新store数据，数组也响应式更新
const coursesR = useExample09Store().coursesS
// 组件中，直接响应式更新store数据
const changeItemF = () => {
  coursesR.value.forEach((c, index) => index % 2 == 0 && (c.name = '响应式改变'))
}
</script>
