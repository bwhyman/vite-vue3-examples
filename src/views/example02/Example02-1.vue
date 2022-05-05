<template>
  <div>
    <div>
      <h1>非响应式</h1>
      普通数据也可渲染在视图。以下message数据为非响应式的静态数据，即数据改变时视图无响应。
      <br />
      message: {{ message }}
      <br />
      当执行以下函数改变userRef值，此数据不会改变
      <br />
      user: {{ user.name }}
    </div>
    <hr />
    <div>
      <h1>composition-api</h1>
      <p>
        <a
          href="https://v3.cn.vuejs.org/guide/composition-api-introduction.html"
          target="_blank"
        >
          什么是组合式 API？
        </a>
      </p>
      <hr />
      <h1>ref()</h1>
      <p>
        ref()函数，支持基本数据类型/数组/对象/数据转为响应式数据，
        在TS中通过value属性获取/修改，在视图模板直接使用自动拆箱。
      </p>

      <button type="button" @click="changeUserRef">changeUserRef</button>
      <br />
      {{ userRef?.name }} / {{ userRef?.address }} / {{ userRef?.insertTime }}
    </div>
    <hr />
    <div>
      <h1>computed()</h1>
      <p>
        computed()函数声明计算属性，当userRef中封装的对象或其属性数据改变时，重新计算并渲染user中inserttime属性值
        <br />
        {{ userRef?.name }} / {{ userRef?.address }} / {{ userComputed }}
      </p>
    </div>
    <hr />
    <div>
      <h1>watch()</h1>
      <p>
        watch()函数，用以在响应式数据改变时执行操作(允许执行异步操作)
        <br />
        watch()支持0/1/2个参数，被监听的响应式属性(Ref对象)，传入new/old值的监听回调函数
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/datasource/Types'
import { computed, ref, watch } from 'vue'

const message = 'hello'
const user: User = {
  name: 'BO',
  insertTime: '2046-04-09T11:04:25',
}
const user2: User = {
  name: 'SUN',
  insertTime: '2046-04-11T20:24:59',
  address: '956',
}
const userRef = ref(user)
// 视图执行函数
const changeUserRef = () => {
  setTimeout(() => {
    userRef.value = user2
  }, 1000)
}
// computed()函数
const userComputed = computed(() => userRef.value.insertTime?.replace('T', ' '))
// watch()函数，只能监听响应式数据的变化
watch(userRef, (newUser) => alert(`watch被激活。用户名被改为: ${newUser.name}`))
</script>
