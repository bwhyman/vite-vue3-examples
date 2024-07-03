import { getShopMock, listShopsMock } from '../data/homework02'
import { useH2Store } from '../store/index'

export const listShopsService = async () => {
  const shopListS = useH2Store().shopListS
  if (shopListS.value.length == 0) {
    shopListS.value = await listShopsMock()
  }
  return shopListS
}

export const getShopService = async (sid: string) => {
  const shopMapS = useH2Store().shopMapS
  let shopItemsS = shopMapS.value.get(sid)
  if (shopItemsS) return shopItemsS
  // 异步加载数据，并更新store
  shopItemsS = await getShopMock(sid)
  shopMapS.value.set(sid, shopItemsS)
  return shopItemsS
}

export const getOrdersService = () => {
  return useH2Store().ordersS
}
