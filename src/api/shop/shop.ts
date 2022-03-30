import request from '@/utils/system/request'
// 获取数据api
export function storeQuery(data: object) {
  return request({
    url: '/g/store/query',
    method: 'post',
    data
  })
}

export function storeFetch(data: object) {
    return request({
      url: '/g/store/fetch',
      method: 'post',
      data
    })
  }

  export function storeValid(data: object) {
    return request({
      url: '/g/store/valid',
      method: 'post',
      data
    })
  }

  export function storeUpdate(data: object) {
    return request({
      url: '/g/store/update',
      method: 'post',
      data
    })
  }

  export function storeDelete(data: object) {
    return request({
      url: '/g/store/del',
      method: 'post',
      data
    })
  }

  export function storeInsert(data: object) {
    return request({
      url: '/g/store/insert',
      method: 'post',
      data
    })
  }

  export function orderRulesQuery(data: object={}) {
    return request({
      url: '/g/admin_rule/query_rule',
      method: 'post',
      data
    })
  }