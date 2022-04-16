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
export function materialValid(data: object) {
  return request({
    url: '/g/materials/valid',
    method: 'post',
    data
  })
}

export function materialFetch(data: object) {
  return request({
    url: '/g/materials/detail',
    method: 'post',
    data
  })
}

export function materialSupplementQuery(data: object) {
  return request({
    url: '/g/materials_supplement/query',
    method: 'post',
    data
  })
}

export function materialSupplementInsert(data: object) {
  return request({
    url: '/g/materials_supplement/insert',
    method: 'post',
    data
  })
}

export function materialSupplementUpdate(data: object) {
  return request({
    url: '/g/materials_supplement/update',
    method: 'post',
    data
  })
}