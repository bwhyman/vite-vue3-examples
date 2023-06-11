import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useExample16Store = defineStore('example16', () => {
  // 模拟绑定/切换权限值测试
  const roleS = ref('')
  const changeRoleA = () => {
    roleS.value = roleS.value == USER ? ADMIN : USER
  }
  return {
    roleS,
    changeRoleA
  }
})
// 默认权限值
export const USER = 'pe2f6'
export const ADMIN = '5gd9'
