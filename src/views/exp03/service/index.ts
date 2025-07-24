import { getShopMock, listShopsMock } from '../data/homework02'
import { useH2Store } from '../store/index'

const store = useH2Store()

export const listShopsService = async () => {
  const shopListS = store.shopListS
  if (shopListS.value.length == 0) {
    shopListS.value = await listShopsMock()
  }
  return shopListS
}

export const getShopService = async (sid: string) => {
  const shopMap = store.shopMap
  let shop = shopMap.get(sid)
  if (shop) return shop
  // 异步加载数据，并更新store
  shop = await getShopMock(sid)
  shopMap.set(sid, shop)
  return shop
}

export const getOrdersService = () => {
  return store.ordersS
}
