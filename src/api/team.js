import request from '@/utils/request'
import qs from 'qs'

export const tableData = async data => {
  const url = '/user/list'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api',
    data: qs.stringify(data)
  })
}
