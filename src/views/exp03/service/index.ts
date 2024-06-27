import { getShopMock, listShopsMock, type Shop } from '../data/homework02'
import { useH2Store } from '../store/index'

export const listShopsService = async () => {
  const shopListS = useH2Store().shopListS
  if (shopListS.value.length == 0) {
    shopListS.value = await listShopsMock()
  }
  return shopListS
}

export const getShopService = async (sid: string) => {
  const shopCacheS = useH2Store().shopCacheS
  let shopS = shopCacheS.value.find((sh) => sh.id === sid)
  if (shopS) return shopS
  // 异步加载数据，并更新store
  shopS = await getShopMock(sid)
  shopCacheS.value.push(shopS)
  return shopS
}

export const getOrdersService = () => {
  return useH2Store().ordersS
}

export const getOrderCostService = () => {
  return useH2Store().costC
}
