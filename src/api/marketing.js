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

export function MarketRestrictList(data) {
  return request({
    url: '/campaign-restrict/list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export function PromotionData(data) {
  return request({
    url: '/store/promotion-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export function PromotionSelect() {
  return request({
    url: '/store/category-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' }
  })
}
