import request from '../../../utils/request'
import qs from 'qs'
export function floor(query) {
  return request({
    url: '/order/get-order-search',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(query)
  })
}
export function order(query) {
  return request({
    url: '/order/get-main-order-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(query)
  })
}
export function Return(query) {
  return request({
    url: '/return/get-return-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(query)
  })
}
export function Whole(query) {
  return request({
    url: '/whole-single-return/list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(query)
  })
}
export function invoice(query) {
  return request({
    url: '/order/get-invoice-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(query)
  })
}
export function Research(query) {
  return request({
    url: 'return/get-return-new-search',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(query)
  })
}
