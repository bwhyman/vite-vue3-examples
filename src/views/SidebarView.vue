<template>
  <div>
    <h1>Vue Examples</h1>
    <h3><router-link to="/">Home</router-link></h3>

    <h3>Composition API</h3>
    <ul>
      <li>
        <router-link to="/example02-1">
          interface & ref() & computed() & watch() & watchEffect()
        </router-link>
      </li>
      <li>
        <router-link to="/example02-2">Reactive-02</router-link>
      </li>
      <li>
        <router-link to="/example02-4">shallowRef()</router-link>
      </li>
      <li>
        <router-link to="/example02-3">reactive()</router-link>
      </li>
    </ul>
    <h3>Route With Params</h3>
    <ul>
      <li>
        <router-link to="/example03-1/students/45/homeworks/23">
          useRoute(): students/45/homeworks/23
        </router-link>
      </li>
      <li>
        <router-link to="/example03-1/students/18/homeworks/18">
          useRoute(): students/18/homeworks/18
        </router-link>
      </li>
    </ul>
    <h3>Directives</h3>
    <ul>
      <li>
        <router-link to="/example05-1">template & if & v-bind</router-link>
      </li>
      <li>
        <router-link to="/example05-2">v-bind</router-link>
      </li>
      <li><router-link to="/example05-3">v-for</router-link></li>
    </ul>
    <h3>Form Input Bindings</h3>
    <ul>
      <li><router-link to="/example07-1">v-model</router-link></li>
      <li><router-link to="/example07-2">Examples</router-link></li>
    </ul>
    <h3>Component</h3>
    <ul>
      <li><router-link to="/example06-1">Async Component</router-link></li>
      <li><router-link to="/example06-2">keep-alive</router-link></li>
    </ul>
    <h3>Global Store</h3>
    <ul>
      <li>
        <router-link to="/example08-1">State</router-link>
      </li>
      <li>
        <router-link to="/example08-2">Actions</router-link>
      </li>
      <li>
        <router-link to="/example08-3">Getters</router-link>
      </li>
    </ul>
    <h3>Passing Data to Child Component</h3>
    <ul>
      <li>
        <router-link to="/example09-1">defineProps()</router-link>
      </li>
      <li>
        <router-link to="/example09-4">Passing Functions</router-link>
      </li>
      <li>
        <router-link to="/example09-5">defineModel()</router-link>
      </li>
      <li>
        <router-link to="/example09-3">defineExpose()</router-link>
      </li>
      <li>
        <router-link to="/example09-2">defineEmits()</router-link>
      </li>
    </ul>
    <h3>Network</h3>
    <ul>
      <li>
        <router-link to="/example10-1">VueUse useFetch</router-link>
      </li>
      <li>
        <router-link to="/example11-1">Mock & mriage</router-link>
      </li>
      <li>
        <router-link to="/example11-2">Login</router-link>
      </li>
      <li>
        <router-link to="/example11-3">URL passing json params</router-link>
      </li>
    </ul>
    <h3>Nested Routes</h3>
    <ul>
      <li>
        <router-link to="/example12-1">Nested Routes</router-link>
      </li>
    </ul>
    <h3>Navigation Guards</h3>
    <ul>
      <li>
        <router-link to="/example13/login">Navigation Guards</router-link>
      </li>
    </ul>
    <h3>Loading Components</h3>
    <ul>
      <li>
        <router-link to="/example15">suspense</router-link>
      </li>
      <li>
        <router-link to="/example15-2">component/v-if</router-link>
      </li>
    </ul>
    <h3>Slots</h3>
    <ul>
      <li>
        <router-link to="/example16">Slots</router-link>
      </li>
    </ul>
    <h3>Functional Components</h3>
    <ul>
      <li>
        <router-link to="/example17">Functional Components</router-link>
      </li>
    </ul>
    <h3>Proxy</h3>
    <ul>
      <li>
        <a href="/vue-proxy.html" target="_blank">JS+HTML+Proxy</a>
      </li>
    </ul>
    <h3>Experiments & Homwork</h3>
    <ul>
      <li>
        <router-link to="/exp02">Experiment02 - Vue双向绑定实验</router-link>
      </li>
      <li>
        <router-link to="/exp03">Experiment03 - 单一数据源实验</router-link>
      </li>
      <li>
        <router-link to="/homework01">Homework - 组件动态切换</router-link>
      </li>
      <li>
        <router-link to="/homework04">Homework - Checkbox双向互交绑定</router-link>
      </li>
      <li>
        <router-link to="/homework02">Homework - 组件封装与暴露属性</router-link>
      </li>
      <li>
        <router-link to="/homework03">Homework - 基于Slot的组件内容扩展</router-link>
      </li>
      <li>
        <router-link to="/homework05">Homework - 函数式全屏Loading遮罩组件</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
</style>
