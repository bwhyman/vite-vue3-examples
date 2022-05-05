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
import type { State } from '@/datasource/Types'
import { computed } from 'vue'
import { useStore } from 'vuex'
import { GETTER_PREMISSION } from '@/store/EventTypes'

const store = useStore<State>()
const userS = store.state.user
const premissionGetter = computed(() => store.getters[GETTER_PREMISSION])
</script>
