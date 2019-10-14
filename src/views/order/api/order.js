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
