<script lang="ts" setup>
import { storeToRefs } from 'pinia'
import { computed } from 'vue'
import { useCounterStore } from './stores/counter'
import { useCoursesStore } from './stores/courses'

const counterStore = useCounterStore()
const increment = () => counterStore.count++

const coursesStore = useCoursesStore()
const listCs = () => coursesStore.listCourses()

// storeToRefs()/computed()类似，保持获取的state数据的响应式
const coursesComputed = computed(() => coursesStore.courses)
const { courses } = storeToRefs(coursesStore)
console.log(courses)

const patch = () =>
  coursesStore.$patch((state) => {
    state.courses[0].name = 'pinia'
    state.courses[1].name = 'vuex'
  })
</script>
<template>
  <div>
    <h1>Pinia</h1>
    <img
      src="https://pinia.vuejs.org/logo.svg"
      alt="pinia"
      style="width: 100px"
    />
    <br />
    https://pinia.vuejs.org/introduction.html
    <br />
    https://github.com/vuejs/pinia
    <br />
    Pinia是替代vuex的下一代状态管理库，更简洁高效。
    <br />
    安装pinia；按插件在main.ts引入createPinia()函数创建的对象；
    <br />
    按官方建议，每一个state数据由一个文件维护，利于构建时打包。粒度不用这么细，相关数据聚合在一起即可。
    <hr />
    <h1>State</h1>
    {{ counterStore.count }}
    <br />
    与vuex相似，store中state中数据是响应式，因此可直接绑定到视图。
    <br />
    <button @click="increment">increment</button>
    <hr />
    <h1>Getters</h1>
    与vuex
    getter相似，state的计算属性，但getter中属性支持置于state中，可直接使用无需调用getter。{{
      counterStore.multiplyCount
    }}
    <br />
    同样支持返回函数并传参，2倍计算count。{{ counterStore.multiplyCountBy(2) }}
    <hr />
    <h1>Actions</h1>
    Actions属性，支持异步操作，可基于async/await，或返回Promise。
    <br />
    <button @click="listCs">list courses</button>
    <ul>
      <!-- <li v-for="(c, index) of coursesStore.courses" :key="index">{{c.name}}</li> -->
      <li v-for="(c, index) of courses" :key="index">{{ c.name }}</li>
    </ul>
    <hr />
    <h1>storeToRefs()</h1>
    可替代computed()函数，从store对象中解构出state数据并保持响应式。
    <hr />
    <h1>$patch()</h1>
    批量更新，支持函数，可注入state对象。
    <br />
    <button @click="patch">patch</button>
    <hr />
    Resetting the state, $reset()
    <br />
    Modifiable state, mapWritableState()
    <br />
    Replacing the state, store.$state
    <br />
    Subscribing to the state, $subscribe()
    <br />
    Subscribing to actions, store.$onAction()
    <br />
  </div>
</template>
