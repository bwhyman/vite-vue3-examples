<script setup lang="ts">
import MyAuthVue from './MyAuthVue.vue'
import MyButtonVue from './MyButtonVue.vue'
import MyCardVue from './MyCardVue.vue'
import { useExample16Store, USER, ADMIN } from './Example16Store'

const store = useExample16Store()
</script>
<template>
  <div>
    <h1>Slots</h1>
    <div>
      <h3>Slot Content and Outlet</h3>
      <p>
        没有声明插槽内容，使用组件默认值
        <br />
        <MyButtonVue />
        <br />
        填充了插槽内容
        <br />
        <MyButtonVue>Save(父组件填充内容)</MyButtonVue>
      </p>
    </div>
    <div>
      <h3>Named Slots & Scoped Slots</h3>
      <p>
        通过`#`指定组件插槽名称，填充内容。
        <br />
        为具名插槽指定参数对象名称，获取子组件绑定的自定义属性值，且参数有作用范围。
        <br />
        <MyCardVue>
          <template #default="props">Header, 为默认插槽传值。{{ props.slotProps }}</template>
          <template #content="cprops"
            >Content, 为指定插槽传值。Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Tempora, est? <br />
            子组件从插槽content传出的参数color，作用范围仅在指定插槽内部: {{ cprops.color }}
          </template>
        </MyCardVue>
      </p>
    </div>
    <div>
      <h3>Passing Value to Slot</h3>
      <p>
        系统需要许多细粒度的、不同权限展示的内容，在每一个组件上使用`v-if`绑定过于冗余。
        <br />
        创建抽象的带插槽的自定义组件，接收传入的权限值，在组件内实现权限校验。使用时，仅需将权限内容插入插槽，并声明权限值。
        <br />

        <button @click="store.changeRoleA">切换角色</button>
        <br />
        <MyAuthVue :role="USER"> `USER`角色可见</MyAuthVue>
        <MyAuthVue :role="ADMIN"> `ADMIN`角色可见</MyAuthVue>
      </p>
    </div>
  </div>
</template>
