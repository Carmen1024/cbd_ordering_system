import request from '@/utils/system/request'

export function areaTree() {
    return request({
      url:'/g/area/list_tree',
      method: 'post'
    })
  }