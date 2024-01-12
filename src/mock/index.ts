import { createServer, Response } from 'miragejs'
import { listCourses } from '@/datasource/DataSource'
import type { Course, User } from '@/datasource/Types'
import type { ResultVO } from '@/datasource/Types'
import * as consty from '@/datasource/Const'

const server = createServer({})
server.namespace = 'api'

server.get('users/:uid', () => {
  const resultVO: ResultVO<{ user: User }> = {
    code: 200,
    data: { user: { id: 2, name: 'SUN' } }
  }

  return resultVO
})

server.get('users/:uid/courses', () => {
  const resultVO: ResultVO<{ courses: Course[] }> = {
    code: 200,
    data: { courses: listCourses() }
  }

  return resultVO
})

server.post('login', (_schema, request) => {
  // 从请求对象中获取参数，反序列化为JS对象。解构
  const { number, password } = JSON.parse(request.requestBody)

  const resultVO: ResultVO<{}> = { code: 200, data: {} }
  if (number == '1001' && password == '123456') {
    resultVO.data = { role: '243f45a3ce', user: { title: '讲师' } }
    return new Response(
      200,
      {
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      },
      resultVO
    )
  }
  resultVO.code = 401
  resultVO.message = '用户名密码错误'
  return resultVO
})

server.get('home', (_schema, request) => {
  const resultVO: ResultVO<{}> = { code: 200, data: {} }
  const token = request.requestHeaders.token
  if (!token) {
    resultVO.code = 401
    resultVO.message = '未登录'
    return resultVO
  }
  if (
    token ==
    '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
  ) {
    resultVO.code = 200
    resultVO.data = { courses: listCourses() }
    return resultVO
  }

  resultVO.code = 403
  resultVO.message = '无权限'
  return resultVO
})

server.get('search', (_schema, request) => {
  const resultVO: ResultVO<{}> = { code: 200, data: {} }
  const address = request.queryParams.address
  console.log(address)
  const ids = [{ id: '584' }, { id: '8875' }]
  resultVO.data = ids
  return resultVO
})

server.post('login-guard', (_schema, request) => {
  const { number, password } = JSON.parse(request.requestBody)

  const resultVO: ResultVO<{}> = { code: 200, data: {} }
  if (number == 'user' && password == 'user') {
    return new Response(
      200,
      {
        role: consty.USER,
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      },
      resultVO
    )
  }
  if (number == 'admin' && password == 'admin') {
    return new Response(
      200,
      {
        role: consty.ADMIN,
        token:
          '744193c872b677aab12a0ced447882f4cf9fca92a09d428a26ed145ed2ed2eec665c8824ebc353042ba2be136efcb5c6'
      },
      resultVO
    )
  }
  resultVO.code = 401
  resultVO.message = '用户名密码错误'
  return resultVO
})

// Example15
server.get(
  'courses',
  () => {
    const resultVO: ResultVO<{}> = { code: 200, data: {} }
    resultVO.data = {
      courses: listCourses()
    }
    return resultVO
  },
  { timing: 2000 }
)
// 当前无效
server.passthrough('https://api.github.com/users/**')
