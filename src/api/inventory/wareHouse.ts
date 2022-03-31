import request from '@/utils/system/request'
// 获取数据api
export function wareHouseQuery(data: object) {
  return request({
    url: '/g/warehouse/query',
    method: 'post',
    data
  })
}

export function wareHouseFetch(data: object) {
    return request({
      url: '/g/warehouse/detail',
      method: 'post',
      data
    })
  }

  export function wareHouseValid(data: object) {
    return request({
      url: '/g/warehouse/valid',
      method: 'post',
      data
    })
  }

  export function wareHouseUpdate(params: object) {
    return request({
      url: '/g/warehouse/update',
      method: 'post',
      params
    })
  }

  export function wareHouseDelete(data: object) {
    return request({
      url: '/g/warehouse/del',
      method: 'post',
      data
    })
  }

  export function wareHouseInsert(params: object) {
    return request({
      url: '/g/warehouse/insert',
      method: 'post',
      params
    })
  }
