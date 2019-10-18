import request from '../../../utils/request'
import qs from 'qs'
export function prodList(query) {
  return request({
    url: '/prod/list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(query)
  })
}
export function prodSearch(query) {
  return request({
    url: '/prod/search-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(query)
  })
}
export function stockList(query) {
  return request({
    url: '/prod/stock-list',
    method: 'POST',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(query)
  })
}
