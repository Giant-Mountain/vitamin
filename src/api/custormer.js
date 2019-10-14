import request from '@/utils/request'
import qs from 'qs'

export function MergerList(data) {
  return request({
    url: '/member/member-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export function SearchList() {
  return request({
    url: '/member/search-set',
    method: 'post',
    baseURL: '/api'
  })
}
