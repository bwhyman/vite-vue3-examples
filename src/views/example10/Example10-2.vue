<template>
  <div>
    <p>
      由于传递的参数带路径标识‘/’，因此在地址栏传递传统的键值对。
      <br />
      在地址栏传参可以在刷新/收藏夹等保存，如果通过路由的{params}传参，刷新时无法获得参数
      <br />
      通过useRoute().query获取指定键的值
      <br />
      const url = useRoute().query.url;
    </p>
    <hr />
    <p>点击表格的size/forks/stars/pushed_at标题，可以正倒排序。</p>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td @click="sortR('language')">language</td>
        <td @click="sortR('size')">size</td>
        <td @click="sortR('forks')">forks</td>
        <td @click="sortR('stargazers_count')">stars</td>
        <td @click="sortR('pushed_at')">pushed_at</td>
      </tr>
      <tr v-for="(repo, index) in reposR" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ repo?.name }}</td>
        <td>{{ repo?.language }}</td>
        <td>{{ repo?.size }}</td>
        <td>{{ repo?.forks }}</td>
        <td>{{ repo?.stargazers_count }}</td>
        <td>{{ repo?.pushed_at }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" setup>
import type { GithubRepos } from '@/type'
import { useFetch } from '@vueuse/core'
import { ref } from 'vue'
import { useRoute } from 'vue-router'

// 这块代码知道是排序即可
const sortR = (propertyName: string) => {
  reposR.value.sort((a: GithubRepos, b: GithubRepos) => {
    type K = keyof GithubRepos
    const ar: number | string = a[propertyName as K]!
    const br: number | string = b[propertyName as K]!
    return reverse.value ? (ar > br ? 1 : -1) : ar > br ? -1 : 1
  })
  reverse.value = !reverse.value
}

const url = useRoute().query.url as string
const reposR = ref<GithubRepos[]>([])
const reverse = ref(false)

useFetch(url)
  .get()
  .json()
  .then((resp) => (reposR.value = resp.data.value))
</script>
<style scoped>
table,
tr,
td {
  border-collapse: collapse;
}
td {
  padding: 5px;
  border-bottom: 1px solid black;
}
</style>
