import { getShop, listShops, type Shop } from '../data/homework02'
import { useH2Store } from '../store/index'

export const listShopsService = async () => {
  const shopListS = useH2Store().shopListS
  if (shopListS.value.length == 0) {
    setTimeout(() => {
      shopListS.value = listShops()
    }, 1000)
  }
}

export const getShopService = async (sid: number) => {
  const shopCacheS = useH2Store().shopCacheS
  let shop = shopCacheS.value.find((sh) => sh.id == sid)
  if (shop) return shop

  // 异步加载数据，并更新state中数据
  return new Promise<Shop>((resolve) => {
    setTimeout(() => {
      shop = getShop(sid)!
      // &&短路特性。如果shop为空直接结束，不为空执行右表达式
      shop && shopCacheS.value.push(shop)
      resolve(shop)
    }, 1000)
  })
}
