<template>
  <div>
    <p>
      https://api.github.com/users/bwhyman
      <br />
      <img :src="user.avatar_url" alt="" style="width: 30%" />
      <br />
      login: {{ user?.login }}
      <br />
      company: {{ user?.company }}
      <br />
      repos_url:
      <!-- :to="{ name: 'example09-02', query: { url: user.repos_url } }" -->
      <router-link :to="`/example10-2?url=${user.repos_url}`">
        {{ user.repos_url }}
      </router-link>
      <br />
      public_repos: {{ user?.public_repos }}
      <br />
      followers: {{ user?.followers }}
      <br />
    </p>
  </div>
</template>
<script lang="ts" setup>
import { ref } from 'vue'
import axios from '@/axios/index'
import type { GithubUser } from '@/datasource/Types'
const user = ref<GithubUser>({})
// 创建新axios对象，避免与声明了配置的axios冲突
axios
  .create() // 仅此示例使用
  .get('https://api.github.com/users/bwhyman')
  .then((resp) => (user.value = resp.data))
</script>
