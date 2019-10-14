import request from '@/utils/request'

export function MergerList(data) {
  return request({
    url: '/member/member-list',
    method: 'post',
    baseURL: '/api',
    data
  })
}
