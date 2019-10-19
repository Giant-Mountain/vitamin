import request from '@/utils/request'
import qs from 'qs'
export function ManagerList(data) {
  return request({
    url: '/store/get-store-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export function FloorList(data) {
  return request({
    url: '/store/floor-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}
export function EList(data) {
  return request({
    url: '/store/get-store-power-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}
export function BrandList(data) {
  return request({
    url: '/store/brand-list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}
