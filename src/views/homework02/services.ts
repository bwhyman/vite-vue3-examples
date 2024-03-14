import type { Department, Teacher } from './type'

// 模拟异步获取全部部门
export const listDepartmentsService = async () => {
  return new Promise<Department[]>((resolve) => {
    setTimeout(() => {
      resolve(deps)
    }, 1000)
  })
}

export const listTeachersService = (depId: string) => {
  return new Promise<Teacher[]>((resolve) => {
    setTimeout(() => {
      const ts = teachers.filter((t) => t.depId == depId)
      resolve(ts)
    }, 1000)
  })
}

// -----------------------

const deps: Department[] = [
  {
    id: '102',
    name: '大数据'
  },
  {
    id: '154',
    name: '人工智能'
  },
  {
    id: '243',
    name: '软件工程'
  }
]

const teachers: Teacher[] = [
  {
    id: '32',
    name: '张阳',
    depId: '102'
  },
  {
    id: '41',
    name: '詹泽晔',
    depId: '102'
  },
  {
    id: '43',
    name: '林玥辰',
    depId: '102'
  },
  {
    id: '52',
    name: '薛瀚',
    depId: '154'
  },
  {
    id: '54',
    name: '赖申婷',
    depId: '154'
  },
  {
    id: '56',
    name: '王青',
    depId: '154'
  },
  {
    id: '63',
    name: '蔡瑶',
    depId: '243'
  },
  {
    id: '64',
    name: '郭夏瑶',
    depId: '243'
  },
  {
    id: '67',
    name: '王思盈',
    depId: '243'
  }
]
