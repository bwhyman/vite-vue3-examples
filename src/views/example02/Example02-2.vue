<template>
  <div>
    <div>
      <h1>新添加属性</h1>
      <p>
        基于Proxy代理对象能够感知新添加的属性。
        <br />
        <button type="button" @click="changeAddress">changeAddress</button>
        <br />
        {{ userRef.name }} / {{ userRef.insertTime }} / {{ userRef.address }}
      </p>
    </div>
    <hr />
    <div>
      <h1>计算属性返回函数</h1>
      <p>
        正常computed()函数绑定计算的结果。但，当需要基于获取的数据，动态绑定计算结果时。
        <br />
        正常渲染结果： {{ userRef.insertTime }}
        <br />

        计算属性返回函数：{{ formatDateFunc(userRef.insertTime || '') }}
      </p>
    </div>
    <hr />
    <div>
      <h1>响应式数据的深度</h1>
      <p>
        响应式对象下的属性对象下的数据改变时，依然是响应式的。
        <br />
        {{ userR2.courses }}
        <br />
        <button @click="changeUserR2">改变user下的courses下的值</button>
      </p>
    </div>
  </div>
</template>
<script lang="ts" setup>
import type { User } from '@/type'
import { computed, ref, watch } from 'vue'
// 初始化组件数据
const user: User = {
  name: 'BO',
  insertTime: '2046-04-09T11:04:25'
}

const userRef = ref(user)

const changeAddress = () => {
  userRef.value.address = (Math.random() * 1000).toFixed(0)
  userRef.value.name = 'SUN'
}
// 通过函数，可监听响应式数据中数据的改变
watch(
  () => userRef.value.name,
  () => {
    console.log(userRef.value)
  }
)

// 计算属性，返回的不是值，而是函数
const formatDateFunc = computed(() => (data: string) => data.replace('T', ' '))

//
const userR2 = ref<User>({
  name: 'BO',
  insertTime: '2046-04-09T11:04:25',
  courses: [{ id: 12 }]
})

const changeUserR2 = () => {
  userR2.value.courses &&
    userR2.value.courses[0] &&
    (userR2.value.courses[0].id = Math.floor(Math.random() * 10))
}
</script>
