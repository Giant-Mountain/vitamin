import request from '@/utils/request'
import qs from 'qs'
export function MarketList(data) {
  return request({
    url: '/campaign/list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export function MarketSelectData(data) {
  return request({
    url: '/campaign/search-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}
