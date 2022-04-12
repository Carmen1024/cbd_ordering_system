import request from '@/utils/system/request'

// 获取数据api
export function classifyQuery(data: object) {
  return request({
    url: '/g/classify/query_valid_list',
    method: 'post',
    data
  })
}

export function classifyInsert(data: object) {
  return request({
    url: '/g/classify/insert',
    method: 'post',
    data
  })
}

export function classifyUpdate(data: object) {
  return request({
    url: '/g/classify/update',
    method: 'post',
    data
  })
}

export function classifyDelete(data: object) {
  return request({
    url: '/g/classify/del',
    method: 'post',
    data
  })
}