import request from '@/utils/system/request'
// 获取数据api
export function staffQuery(data: object,from="") {
  // 是否存在父-门店
  const url = from=="store" ? '/g/admin_store/query_staff' : '/g/user/query'
  return request({
    url,
    method : 'post',
    data
  })
}

export function staffFetch(data: object) {
    return request({
      url: '/g/admin_store/query_staff',
      method: 'post',
      data
    })
  }

  export function staffValid(data: object) {
    return request({
      url: '/g/user/valid',
      method: 'post',
      data
    })
  }

  export function staffUpdate(data: object) {
    return request({
      url: '/g/user/update',
      method: 'post',
      data
    })
  }

  export function staffDelete(data: object) {
    return request({
      url: '/g/user/del',
      method: 'post',
      data
    })
  }

  export function staffInsert(data: object,from="") {
    // 是否存在父-门店
    const url = from=="store" ? '/g/admin_store/add_store_staff' : '/g/user/insert'
    return request({
      url,
      method: 'post',
      data
    })
  }