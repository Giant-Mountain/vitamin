import axios from 'axios'
import { MessageBox, Message } from 'element-ui'
import store from '@/store'
import { getToken } from '@/utils/auth'

document.cookie =
  'Authorization=Bearer DgZcRu7p9X2bkMrTseNpc3Wa2Df00ovN; org_id=61500; userId=963245015; org_type=5; avatar=https://img.weitaming.com/test/base_user/avatar/20180912/4ba047689c360d2ff846332892edfd05.jpg; userName=方超管; roleType=3; logo=https://img.weitaming.com/test/vm_mall/logo/20191010/2050ba08f6a773eb996f104dec6cb8a8.jpg; name=测试国芳百货广场店; mallId=61500; alias=betalzgf; menuList=[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]; selectedKeys=#/customer/list'
document.cookie =
  'org_id=61500; userId=963245015; org_type=5; avatar=https://img.weitaming.com/test/base_user/avatar/20180912/4ba047689c360d2ff846332892edfd05.jpg; userName=方超管; roleType=3; logo=https://img.weitaming.com/test/vm_mall/logo/20191010/2050ba08f6a773eb996f104dec6cb8a8.jpg; name=测试国芳百货广场店; mallId=61500; alias=betalzgf; menuList=[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]; selectedKeys=#/customer/list'
document.cookie =
  'userId=963245015; org_type=5; avatar=https://img.weitaming.com/test/base_user/avatar/20180912/4ba047689c360d2ff846332892edfd05.jpg; userName=方超管; roleType=3; logo=https://img.weitaming.com/test/vm_mall/logo/20191010/2050ba08f6a773eb996f104dec6cb8a8.jpg; name=测试国芳百货广场店; mallId=61500; alias=betalzgf; menuList=[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]; selectedKeys=#/customer/list'
document.cookie =
  'org_type=5; avatar=https://img.weitaming.com/test/base_user/avatar/20180912/4ba047689c360d2ff846332892edfd05.jpg; userName=方超管; roleType=3; logo=https://img.weitaming.com/test/vm_mall/logo/20191010/2050ba08f6a773eb996f104dec6cb8a8.jpg; name=测试国芳百货广场店; mallId=61500; alias=betalzgf; menuList=[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object],[object Object]; selectedKeys=#/customer/list'

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  // withCredentials: true, // send cookies when cross-domain requests
  timeout: 5000, // request timeout
  headers: {
    Authorization: 'Bearer DgZcRu7p9X2bkMrTseNpc3Wa2Df00ovN',
    'x-org-id': '61500',
    'x-org-type': '963245015',
    'x-user-id': '5'
  }
})

// request interceptor
service.interceptors.request.use(
  config => {
    // do something before request is sent

    if (store.getters.token) {
      // let each request carry token
      // ['X-Token'] is a custom headers key
      // please modify it according to the actual situation
      config.headers['X-Token'] = getToken()
    }
    return config
  },
  error => {
    // do something with request error
    console.log(error) // for debug
    return Promise.reject(error)
  }
)

// response interceptor
service.interceptors.response.use(
  /**
   * If you want to get http information such as headers or status
   * Please return  response => response
   */

  /**
   * Determine the request status by custom code
   * Here is just an example
   * You can also judge the status by HTTP Status Code
   */
  response => {
    const res = response.data

    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== 20000) {
      Message({
        message: res.message || 'Error',
        type: 'error',
        duration: 5 * 1000
      })

      // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
      if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
        // to re-login
        MessageBox.confirm(
          'You have been logged out, you can cancel to stay on this page, or log in again',
          'Confirm logout',
          {
            confirmButtonText: 'Re-Login',
            cancelButtonText: 'Cancel',
            type: 'warning'
          }
        ).then(() => {
          store.dispatch('user/resetToken').then(() => {
            location.reload()
          })
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res
    }
  },
  error => {
    console.log('err' + error) // for debug
    Message({
      message: error.message,
      type: 'error',
      duration: 5 * 1000
    })
    return Promise.reject(error)
  }
)

export default service
