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

export const shopFloor = async() => {
  const url = '/store/floor-list'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api'
  })
}

export const seriveList = async() => {
  const url = '/mall/get-system-setting'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api'
  })
}

export const seriveSort = async() => {
  const url = '/sms/get-sms-setting'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api'
  })
}

// plat_type: 1
export const serivePublic = async data => {
  const url = '/wechat/subscription-auth-info'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api',
    data: data
  })
}

// plat_type: 2

export const seriveSmall = async data => {
  const url = '/wechat/small-program-auth-info'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api',
    data: data
  })
}

export const onlineShopmenu = async() => {
  const url = '/estore-setting/get-org-menu-list'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api'
  })
}

export const onlineShopbase = async() => {
  const url = '/mall/get-mall-data'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api'
  })
}

export const onlineShoplimit = async() => {
  const url = '/setting-service/access-limit-get'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api'
  })
}

export const serviceAbort = async data => {
  const url = '/setting-service/get'
  return await request({
    url: url,
    method: 'post',
    baseURL: '/api',
    data: qs.stringify(data)
  })
}
// key: about_us,contact_us,faq,condition,condition_login_display
