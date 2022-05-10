// 无需显式声明类型，可基于字面量类型自动推导
let userName = 'bo'
userName = 'sun'
console.log(userName)

const userObj = { name: 'bo', address: '952' }
// object
console.log(typeof userObj)

export interface Address {
  id: number
  detail?: string
  get?: (a: number, b: string) => void
}

const address = { id: 12 }

interface User {
  id: number
  name: string
  address?: Address
  addresses: Address[]
}
// optional chaining operator，可选链运算符`?`
const user: User = {
  id: 45,
  name: 'BO',
  address: { id: 1 },
  addresses: [{ id: 1 }],
}
console.log(user.address?.id)
// 解构
const { id } = user
console.log(id)

// &&，短路执行
const users: User[] = []

const user2 = users.find((u) => u.id == 88)

console.log(user2?.address?.id)
// 不推荐
users.push(user2!)

if (user2) {
  users.push(user2)
}
// 如果左不为空执行右表达式
user2 && users.push(user2)

// null coalescing operator，空值合并运算符`??`
const detail = user.address?.detail ?? 'df'
console.log(detail)

// 如果user2不为空，置于数组，并返回数组长度。
let l = users.length
if (user2) {
  l = users.push(user2)
}

const l2 = (user2 && users.push(user2)) ?? users.length

export default { userObj, address }
