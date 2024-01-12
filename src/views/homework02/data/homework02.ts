export interface Shop {
  id?: number
  name?: string
  point?: number // 评分
  items?: Item[]
}
export interface Item {
  id?: number
  name?: string
  price?: number
  sales?: number // 月销量
  url?: string
}
export interface Order {
  quantity: number
  item: Item
}
// 获取店铺列表
export function listShops(): Shop[] {
  const shops: Shop[] = [
    { id: 12, name: '必胜客', point: 4.5 },
    { id: 65, name: '牛肉料理', point: 4.2 },
    { id: 89, name: '小林炸鸡', point: 4.8 }
  ]
  return shops
}

const shops: Shop[] = [
  {
    id: 12,
    name: '必胜客',
    point: 4.5,
    items: [
      {
        id: 12,
        name: '玉米嫩鸡芝士焗饭',
        price: 39.9,
        sales: 102,
        url: 'http://freefoodphotos.com/imagelibrary/meals/slides/chorizo_cheese.jpg'
      },
      {
        id: 13,
        name: '夏威夷至尊披萨',
        price: 68.9,
        sales: 55,
        url: 'http://freefoodphotos.com/imagelibrary/meals/slides/homemade_pie.jpg'
      },
      {
        id: 15,
        name: '焖肉盒饭',
        price: 11.9,
        sales: 135,
        url: 'http://freefoodphotos.com/imagelibrary/meals/slides/cooked_fillet_steak.jpg'
      },
      {
        id: 284,
        name: '烤蔬菜',
        price: 38,
        sales: 31,
        url: 'http://freefoodphotos.com/imagelibrary/meals/slides/battered_fish.jpg'
      }
    ]
  },
  {
    id: 65,
    name: '牛肉料理',
    point: 4.2,
    items: [
      {
        id: 21,
        name: '巴塞罗那风情海鲜意面',
        price: 45,
        sales: 21,
        url: 'http://freefoodphotos.com/imagelibrary/meals/slides/bento.jpg'
      },
      {
        id: 24,
        name: '意式肉酱',
        price: 42,
        sales: 19,
        url: 'http://freefoodphotos.com/imagelibrary/meals/slides/chicken_makhani.jpg'
      },
      {
        id: 26,
        name: '皇家彼得红酒牛排',
        price: 69,
        sales: 74,
        url: 'http://freefoodphotos.com/imagelibrary/meals/slides/fast_food_meal.jpg'
      }
    ]
  },
  {
    id: 89,
    name: '小林炸鸡',
    point: 4.8,
    items: [
      {
        id: 345,
        name: '炙烤特选牛里脊肉',
        price: 72.9,
        sales: 31,
        url: 'http://freefoodphotos.com/imagelibrary/meals/slides/chicken_shashlik.jpg'
      },
      {
        id: 867,
        name: '特制牛尾汤肉',
        price: 42,
        sales: 26,
        url: 'http://freefoodphotos.com/imagelibrary/meat/slides/cooking_stew.jpg'
      },
      {
        id: 986,
        name: '三种拼盘',
        price: 24.9,
        sales: 43,
        url: 'http://freefoodphotos.com/imagelibrary/meals/slides/cooked_fillet_steak.jpg'
      }
    ]
  }
]

export function getShop(sid: number) {
  return shops.find((sh) => sh.id == sid)
}
