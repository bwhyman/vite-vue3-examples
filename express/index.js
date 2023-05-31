/**
 * 在开发环境安装express。node ./express/index.js 运行启动此文件
 * 如果main.ts中启动了axios-mock-adapter拦截请求，需关闭
 * vite.config.ts中配置代理
 */
// eslint-disable-next-line no-undef
const express = require('express')
const app = new express()

const courses = [
  { id: 4, name: 'Java程序设计', createTime: '2046-05-10T12:00' },
  { id: 5, name: 'Web开发技术', createTime: '2046-04-10T09:00' },
  { id: 6, name: 'Web系统框架', createTime: '2046-06-10T21:30' },
  { id: 7, name: '移动终端开发技术', createTime: '2046-06-13T18:43' }
]

app.get('/api/courses/:cid', (req, res) => {
  const course = courses.find((c) => c.id == req.params.cid)
  res.header('role', 'admin')
  res.send({
    code: 200,
    data: {
      course: course
    }
  })
})

app.listen('3001', 'localhost')
