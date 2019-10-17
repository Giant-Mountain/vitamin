import request from '@/utils/request'
import qs from 'qs'

export function qrcodeList(data) {
  return request({
    url: '/vm-staff/list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}

export function addQrcodeList(data) {
  return request({
    url: '/vm-staff/save',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}
