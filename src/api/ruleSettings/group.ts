import request from '@/utils/system/request'
// 获取数据api
export function groupQuery(data: object) {
  return request({
    url: '/g/proced/group/query',
    method: 'post',
    data
  })
}

export function groupFetch(data: object) {
    return request({
      url: '/g/proced/group/fetch',
      method: 'post',
      data
    })
  }

export function groupValid(data: object) {
  return request({
    url: '/g/proced/group/valid',
    method: 'post',
    data
  })
}

export function groupUpdate(data: object) {
  return request({
    url: '/g/proced/group/update',
    method: 'post',
    data
  })
}

export function groupDelete(data: object) {
  return request({
    url: '/g/proced/group/del',
    method: 'post',
    data
  })
}

export function groupInsert(data: object) {
  return request({
    url: '/g/proced/group/insert',
    method: 'post',
    data
  })
}
