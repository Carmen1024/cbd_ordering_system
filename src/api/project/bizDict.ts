import request from '@/utils/system/request'
// 获取数据api
export function bizDictQuery(data: object) {
  return request({
    url: '/g/biz_dict/query',
    method: 'post',
    data
  })
}

export function bizDictRow(data: object) {
  return request({
    url: '/g/biz_dict/query_valid',
    method: 'post',
    data
  })
}

export function bizDictChildren(data: object) {
  return request({
    url: '/g/biz_dict/query_list',
    method: 'post',
    data
  })
}

export function bizDictInsert(data: object) {
  return request({
    url: '/g/biz_dict/insert',
    method: 'post',
    data
  })
}

export function bizDictUpdate(data: object) {
  return request({
    url: '/g/biz_dict/update',
    method: 'post',
    data
  })
}

export function bizDictDelete(data: object) {
  return request({
    url: '/g/biz_dict/del',
    method: 'post',
    data
  })
}

export function bizDictFetch(data: object) {
  return request({
    url: '/g/biz_dict/fetch',
    method: 'post',
    data
  })
}

export function bizDictCount(data: object) {
  return request({
    url: '/g/biz_dict/count',
    method: 'post',
    data
  })
}

export function bizDictInsertBatch(data: object) {
  return request({
    url: '/g/biz_dict/insert_batch',
    method: 'post',
    data
  })
}

export function bizDictValid(data: object) {
  return request({
    url: '/g/biz_dict/valid',
    method: 'post',
    data
  })
}