import request from '@/utils/system/request'

// 获取数据api
export function packQuery(data: object) {
  return request({
    url: '/g/material_pack/list',
    method: 'post',
    data
  })
}

export function packInsert(data: object) {
  return request({
    url: '/g/material_pack/insert',
    method: 'post',
    data
  })
}

export function packUpdate(data: object) {
  return request({
    url: '/g/material_pack/update',
    method: 'post',
    data
  })
}

export function packDelete(data: object) {
  return request({
    url: '/g/material_pack/del',
    method: 'post',
    data
  })
}
//packValid
export function packValid(data: object) {
    return request({
      url: '/g/material_pack/valid',
      method: 'post',
      data
    })
  }