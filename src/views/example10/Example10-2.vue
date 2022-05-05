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
    <p>点击表格的size/forks/stars/updated标题，可以正倒排序。</p>
    <table>
      <tr>
        <td>#</td>
        <td>name</td>
        <td @click="sortR('language')">language</td>
        <td @click="sortR('size')">size</td>
        <td @click="sortR('forks')">forks</td>
        <td @click="sortR('stargazers_count')">stars</td>
        <td @click="sortR('updated_at')">updated_at</td>
      </tr>
      <tr v-for="(repo, index) in repos" :key="index">
        <td>{{ index + 1 }}</td>
        <td>{{ repo?.name }}</td>
        <td>{{ repo?.language }}</td>
        <td>{{ repo?.size }}</td>
        <td>{{ repo?.forks }}</td>
        <td>{{ repo?.stargazers_count }}</td>
        <td>{{ repo?.updated_at }}</td>
      </tr>
    </table>
  </div>
</template>
<script lang="ts" setup>
import type { GithubRepos } from '@/datasource/Types'
import { type Ref, ref } from 'vue'
import { useRoute } from 'vue-router'
import axios from '@/axios/index'

function useSort(repos: Ref<GithubRepos[]>, reverse: Ref<boolean>) {
  // 这块代码知道是排序即可
  const sortR = (propertyName: string) => {
    repos.value.sort((a: GithubRepos, b: GithubRepos) => {
      type K = keyof GithubRepos
      const ar: number | string = a[propertyName as K]!
      const br: number | string = b[propertyName as K]!
      return reverse.value ? (ar > br ? 1 : -1) : ar > br ? -1 : 1
    })
    reverse.value = !reverse.value
  }
  return {
    sortR,
  }
}

const url = useRoute().query.url as string
const repos = ref<GithubRepos[]>([])
const reverse = ref(false)
axios
  .create() // 仅此示例使用
  .get(url)
  .then((resp) => (repos.value = resp.data))
const { sortR } = useSort(repos, reverse)
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
