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

export const roleData = async data => {
  const url = '/role/role-desc-list'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api',
    data: qs.stringify(data)
  })
}

export const shopData = async() => {
  const url = '/user/store-select-list'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api'
  })
}

export const roleDatas = async data => {
  const url = '/user/role-select-list'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api',
    data: qs.stringify(data)
  })
}
export const selectList = async data => {
  const url = '/user/list-sreach'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api',
    data: qs.stringify(data)
  })
}

export const shopCategory = async() => {
  const url = '/store/category-list'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api'
  })
}
