import request from '@/utils/request'
import qs from 'qs'
export function PageList(data) {
  return request({
    url: '/page-manage/list',
    method: 'post',
    baseURL: '/api',
    headers: { 'content-type': 'application/x-www-form-urlencoded' },
    data: qs.stringify(data)
  })
}
