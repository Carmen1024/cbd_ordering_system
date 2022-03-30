import request from '@/utils/system/request'
// 获取数据api
export function expenseTypeQuery(data: object) {
  return request({
    url: '/g/base/cost/query/cost/list',
    method: 'post',
    data
  })
}

export function expenseTypeFetch(data: object) {
    return request({
      url: '/g/base/cost/detail',
      method: 'post',
      data
    })
  }

  export function expenseTypeValid(data: object) {
    return request({
      url: '/g/base/cost/valid',
      method: 'post',
      data
    })
  }

  export function expenseTypeUpdate(data: object) {
    return request({
      url: '/g/base/cost/update',
      method: 'post',
      data
    })
  }

  export function expenseTypeDelete(data: object) {
    return request({
      url: '/g/base/cost/delete',
      method: 'post',
      data
    })
  }

  export function expenseTypeInsert(data: object) {
    return request({
      url: '/g/base/cost/insert',
      method: 'post',
      data
    })
  }