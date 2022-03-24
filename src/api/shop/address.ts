import request from '@/utils/system/request'
// 获取数据api
export function addressQuery(data: object) {
  return request({
    url: '/g/store_addr/query',
    method: 'post',
    data
  })
}

export function addressFetch(data: object) {
    return request({
      url: '/g/store_addr/fetch',
      method: 'post',
      data
    })
  }

  export function addressValid(data: object) {
    return request({
      url: '/g/store_addr/valid',
      method: 'post',
      data
    })
  }

  export function addressUpdate(data: object) {
    return request({
      url: '/g/store_addr/update',
      method: 'post',
      data
    })
  }

  export function addressDelete(data: object) {
    return request({
      url: '/g/store_addr/del',
      method: 'post',
      data
    })
  }

  export function addressInsert(data: object) {
    return request({
      url: '/g/store_addr/insert',
      method: 'post',
      data
    })
  }