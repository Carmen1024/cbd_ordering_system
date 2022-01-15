import request from '@/utils/system/request'
// 获取数据api
export function filterQuery(data: object) {
    return request({
      url: '/g/filter/query',
      method: 'post',
      data
    })
  }

export function filterInsert(data: object) {
  return request({
    url: '/g/filter/insert',
    method: 'post',
    data
  })
}

export function filterUpdate(data: object) {
  return request({
    url: '/g/filter/update',
    method: 'post',
    data
  })
}

export function filterDelete(data: object) {
  return request({
    url: '/g/filter/del',
    method: 'post',
    data
  })
}

export function filterFetch(data: object) {
  return request({
    url: '/g/filter/fetch',
    method: 'post',
    data
  })
}

export function filterCount(data: object) {
  return request({
    url: '/g/filter/count',
    method: 'post',
    data
  })
}

export function filterInsertBatch(data: object) {
  return request({
    url: '/g/filter/insert_batch',
    method: 'post',
    data
  })
}

export function filterValid(data: object) {
  return request({
    url: '/g/filter/valid',
    method: 'post',
    data
  })
}