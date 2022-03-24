import request from '@/utils/system/request'
// 获取数据api
export function userQuery(data: object) {
  return request({
    url: '/g/user/query',
    method: 'post',
    data
  })
}

export function userFetch(data: object) {
    return request({
      url: '/g/user/fetch',
      method: 'post',
      data
    })
  }

  export function userValid(data: object) {
    return request({
      url: '/g/user/valid',
      method: 'post',
      data
    })
  }

  export function userUpdate(data: object) {
    return request({
      url: '/g/user/update',
      method: 'post',
      data
    })
  }

  export function userDelete(data: object) {
    return request({
      url: '/g/user/del',
      method: 'post',
      data
    })
  }

  export function userInsert(data: object) {
    return request({
      url: '/g/user/insert',
      method: 'post',
      data
    })
  }