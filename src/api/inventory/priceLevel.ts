import request from '@/utils/system/request'
// 获取数据api
export function priceLevelQuery(data: object) {
  return request({
    url: '/g/admin_rule_price/query',
    method: 'post',
    data
  })
}

export function priceLevelFetch(data: object) {
    return request({
      url: '/g/admin_rule_price/fetch',
      method: 'post',
      data
    })
  }

  export function priceLevelValid(data: object) {
    return request({
      url: '/g/admin_rule_price/valid',
      method: 'post',
      data
    })
  }

  export function priceLevelUpdate(data: object) {
    return request({
      url: '/g/admin_rule_price/update',
      method: 'post',
      data
    })
  }

  export function priceLevelDelete(data: object) {
    return request({
      url: '/g/admin_rule_price/del',
      method: 'post',
      data
    })
  }

  export function priceLevelInsert(data: object) {
    return request({
      url: '/g/admin_rule_price/add',
      method: 'post',
      data
    })
  }