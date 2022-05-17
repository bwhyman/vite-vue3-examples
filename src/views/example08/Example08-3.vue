<template>
  <div>
    <p>
      {{ userS?.name }} / {{ userS?.address }}
      <br />
    </p>
    <hr />
    <p>
      基于vuex
      getter绑定。声明组件所需权限，与vuex中保存的用户权限比较，确定是否显式。
      <br />
      <span v-if="premissionGetter(1)">用户权限为1显示</span>
      <br />
      <span v-if="premissionGetter(2)">用户权限为2显示</span>
    </p>
  </div>
</template>
<script lang="ts" setup>
import { useStore } from '@/store'
import { computed } from 'vue'

const store = useStore()
const userS = store.user
const premissionGetter = computed(() => store.premissionGetter)
</script>
