import request from '@/utils/system/request'

// 获取数据api
export function materialQuery(data: object) {
  return request({
    url: '/g/materials/query',
    method: 'post',
    data
  })
}

export function materialInsert(data: object) {
  return request({
    url: '/g/materials/insert',
    method: 'post',
    data
  })
}

export function materialUpdate(data: object) {
  return request({
    url: '/g/materials/update',
    method: 'post',
    data
  })
}

export function materialDelete(data: object) {
  return request({
    url: '/g/materials/del',
    method: 'post',
    data
  })
}