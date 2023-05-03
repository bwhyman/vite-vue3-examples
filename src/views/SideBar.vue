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
        <router-link to="/example02-3">reactive()</router-link>
      </li>
    </ul>
    <h3>Props, route with params</h3>
    <ul>
      <li>
        <router-link to="/example03-1/students/45/homeworks/23">
          students/45/homeworks/23
        </router-link>
      </li>
      <li>
        <router-link to="/example03-1/students/18/homeworks/18">
          students/18/homeworks/18
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
      <li><router-link to="/example07-1">v-module</router-link></li>
      <li><router-link to="/example07-2">Examples</router-link></li>
    </ul>
    <h3>Component</h3>
    <ul>
      <li><router-link to="/example06-1">Async Component</router-link></li>
      <li><router-link to="/example06-2">keep-alive</router-link></li>
    </ul>
    <h3>Pinia</h3>
    <ul>
      <li>
        <router-link to="/example08-1">State & Sync Update</router-link>
      </li>
      <li>
        <router-link to="/example08-2">Actions & patch()</router-link>
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
        <router-link to="/example09-2">defineEmits()</router-link>
      </li>
      <li>
        <router-link to="/example09-4">defineProps() Functions</router-link>
      </li>
      <li>
        <router-link to="/example09-3">defineExpose()</router-link>
      </li>
    </ul>
    <h3>Axios & Mock</h3>
    <ul>
      <li>
        <router-link to="/example10-1">Axios Github-API</router-link>
      </li>
      <li>
        <router-link to="/example11-1">axios-mock-adapter</router-link>
      </li>
      <li>
        <router-link to="/example11-2">axios & mock & pinia</router-link>
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
    <h3>Suspense</h3>
    <ul>
      <li>
        <router-link to="/example15">suspense</router-link>
      </li>
    </ul>
    <h3>Proxy</h3>
    <ul>
      <li>
        <a href="/vue-proxy.html" target="_blank">JS+HTML+Proxy</a>
      </li>
    </ul>
    <h3>Homwork</h3>
    <ul>
      <li>
        <router-link to="/homework01">Homework - 1</router-link>
      </li>
      <li>
        <router-link to="/homework02">Homework - 2</router-link>
      </li>
    </ul>
  </div>
</template>
<style scoped>
* {
  margin: 0;
}
</style>
