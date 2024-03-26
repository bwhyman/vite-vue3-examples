<script setup lang="ts">
import { ref } from 'vue'

interface ShortDate {
  wDate: boolean
  eDate: boolean
}
const wDates = [1, 2, 3, 4, 5]
const eDates = [6, 7]
//
const dayCheckR = ref<ShortDate>({ wDate: false, eDate: false })
const datesR = ref<number[]>([])
// 当快捷选择
const changeShortDateF = () => {
  const dates = []
  dayCheckR.value.wDate && dates.push(...wDates)
  dayCheckR.value.eDate && dates.push(...eDates)
  datesR.value = dates
}
// 当单独选择
const changeDateF = () => {
  let exist = true
  // 判断当前选择是否包含完整的工作日
  // 一但不包含某工作日停止遍历
  for (const date of wDates) {
    exist = datesR.value.includes(date)
    if (!exist) break
  }
  dayCheckR.value.wDate = exist
  //
  for (const date of eDates) {
    exist = datesR.value.includes(date)
    if (!exist) break
  }
  dayCheckR.value.eDate = exist
}
</script>
<template>
  <div>
    <h1>Homework - Checkbox双向绑定</h1>
    <p>
      快捷选择，与单独选择联动，快捷选择优先级高于单独选择。
      <br />
      使用watch监听会形成死循环，且checkbox只能绑定单值，无法从数组中解构元素。只能执行函数，在函数中比较判断实现。
      <br />
      checkbox触发顺序：click - v-model - change。因此监听click事件无法获取值，必须监听change事件。
    </p>
    <p>
      <label>
        <input type="checkbox" v-model="dayCheckR.wDate" @change="changeShortDateF" />
        工作日 |
      </label>
      <label>
        <input type="checkbox" v-model="dayCheckR.eDate" @change="changeShortDateF" />
        周末
      </label>
    </p>
    <template v-for="n of 7" :key="n">
      <label>
        <input type="checkbox" :value="n" v-model="datesR" @change="changeDateF" />
        星期 {{ n }} |
      </label>
    </template>
  </div>
</template>
