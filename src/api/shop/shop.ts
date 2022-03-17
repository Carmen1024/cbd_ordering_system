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
      url: '/g/store/store_fetch',
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