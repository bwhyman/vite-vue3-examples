<template>
  <div>
    <router-view name="button" />
    <ul>
      <li><router-link to="/example12-1">about</router-link></li>
      <li><router-link to="/example12-1/course">课程管理</router-link></li>
      <li><router-link to="/homework">作业管理</router-link></li>
    </ul>
    <hr />
    <router-view />
  </div>
</template>

<style scoped>
ul li {
  display: inline-block;
  padding: 5px;
}
</style>
