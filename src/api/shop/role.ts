import request from '@/utils/system/request'
// 获取数据api
export function roleQuery(data: object) {
  return request({
    url: '/g/role/query',
    method: 'post',
    data
  })
}

export function roleFetch(data: object) {
    return request({
      url: '/g/role/fetch',
      method: 'post',
      data
    })
  }

  export function roleValid(data: object) {
    return request({
      url: '/g/role/valid',
      method: 'post',
      data
    })
  }

  export function roleUpdate(data: object) {
    return request({
      url: '/g/role/update',
      method: 'post',
      data
    })
  }

  export function roleDelete(data: object) {
    return request({
      url: '/g/role/del',
      method: 'post',
      data
    })
  }

  export function roleInsert(data: object) {
    return request({
      url: '/g/role/insert',
      method: 'post',
      data
    })
  }