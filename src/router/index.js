import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

/* Layout */
import Layout from '@/layout'
export const constantRoutes = [
  {
    path: '/redirect',
    component: Layout,
    hidden: true,
    children: [
      {
        path: '/redirect/:path*',
        component: () => import('@/views/redirect/index')
      }
    ]
  },
  {
    path: '/login',
    component: () => import('@/views/login/index'),
    hidden: true
  },
  {
    path: '/auth-redirect',
    component: () => import('@/views/login/auth-redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404'),
    hidden: true
  },
  {
    path: '/401',
    component: () => import('@/views/error-page/401'),
    hidden: true
  },
  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        component: () => import('@/views/dashboard/index'),
        name: 'home',
        meta: { title: '首页', icon: 'dashboard', affix: true }
      }
    ]
  },
  {
    path: '/survey',
    component: Layout,
    redirect: '/survey',
    children: [
      {
        path: 'survey',
        component: () => import('@/views/survey'),
        name: 'survey',
        meta: { title: '概况', icon: 'documentation', affix: true }
      }
    ]
  }
]

/**
 * asyncRoutes
 * the routes that need to be dynamically loaded based on user roles
 */
export const asyncRoutes = [
  {
    path: '/shop',
    component: Layout,
    redirect: '/shop/management',
    alwaysShow: true, // will always show the root menu
    name: 'shop',
    meta: {
      title: '店铺',
      icon: 'lock'
    },
    children: [
      {
        path: 'management',
        component: () => import('@/views/shop/management'),
        name: 'management',
        meta: {
          title: '店铺管理'
        }
      },
      {
        path: 'navigation',
        component: () => import('@/views/shop/navigation'),
        name: 'navigation',
        meta: {
          title: '专业导航管理'
          // if do not set roles, means: this page does not require permission
        }
      }
    ]
  },
  {
    path: '/page',
    component: Layout,
    redirect: '/page/page',
    alwaysShow: true, // will always show the root menu
    name: 'page',
    meta: {
      title: '页面',
      icon: 'lock'
    },
    children: [
      {
        path: 'page',
        component: () => import('@/views/page/page'),
        name: 'management',
        meta: {
          title: '页面管理'
        }
      }
    ]
  },
  {
    path: '/order',
    component: Layout,
    redirect: '/order/order',
    alwaysShow: true, // will always show the root menu
    name: 'order',
    meta: {
      title: '订单',
      icon: 'lock'
    },
    children: [
      {
        path: 'order',
        component: () => import('@/views/order/order'),
        name: 'order',
        meta: {
          title: '订单管理'
        }
      }
    ]
  },
  {
    path: '/commodity',
    component: Layout,
    redirect: '/commodity/commodity',
    alwaysShow: true, // will always show the root menu
    name: 'commodity',
    meta: {
      title: '商品',
      icon: 'lock'
    },
    children: [
      {
        path: 'commodity',
        component: () => import('@/views/commodity/commodity'),
        name: 'commodity',
        meta: {
          title: '商品管理'
        }
      }
    ]
  },
  {
    path: '/customer',
    component: Layout,
    redirect: '/customer/customer',
    alwaysShow: true, // will always show the root menu
    name: 'customer',
    meta: {
      title: '顾客',
      icon: 'lock'
    },
    children: [
      {
        path: 'customer',
        component: () => import('@/views/customer/customer'),
        name: 'customer',
        meta: {
          title: '顾客管理'
        }
      }
    ]
  },
  {
    path: '/member',
    component: Layout,
    redirect: '/member/member',
    alwaysShow: true, // will always show the root menu
    name: 'member',
    meta: {
      title: '会员',
      icon: 'lock'
    },
    children: [
      {
        path: 'member',
        component: () => import('@/views/member/member'),
        name: 'member',
        meta: {
          title: '会员卡'
        }
      }
    ]
  },
  {
    path: '/marketing',
    component: Layout,
    redirect: '/marketing/marketing',
    alwaysShow: true, // will always show the root menu
    name: 'marketing',
    meta: {
      title: '营销',
      icon: 'lock'
    },
    children: [
      {
        path: 'marketing',
        component: () => import('@/views/marketing/marketing'),
        name: 'marketing',
        meta: {
          title: '营销劵类型'
        }
      }
    ]
  },
  {
    path: '/team',
    component: Layout,
    redirect: '/team/memberManger',
    alwaysShow: true, // will always show the root menu
    name: 'team',
    meta: {
      title: '团队',
      icon: 'lock'
    },
    children: [
      {
        path: 'memberManger',
        component: () => import('@/views/team/memberManger'),
        name: 'memberManger',
        meta: {
          title: '员工管理'
        }
      },
      {
        path: 'soldManger',
        component: () => import('@/views/team/soldManger'),
        name: 'soldManger',
        meta: {
          title: '导购管理'
        }
      }
    ]
  },
  {
    path: '/setup',
    component: Layout,
    redirect: '/setup/setup',
    alwaysShow: true, // will always show the root menu
    name: 'setup',
    meta: {
      title: '服务',
      icon: 'lock'
    },
    children: [
      {
        path: 'setup',
        component: () => import('@/views/setup/setup'),
        name: 'setup',
        meta: {
          title: '服务设置'
        }
      }
    ]
  },

  // 404 page must be placed at the end !!!
  { path: '*', redirect: '/404', hidden: true }
]

const createRouter = () =>
  new Router({
    // mode: 'history', // require service support
    scrollBehavior: () => ({ y: 0 }),
    routes: constantRoutes
  })

const router = createRouter()

// Detail see: https://github.com/vuejs/vue-router/issues/1234#issuecomment-357941465
export function resetRouter() {
  const newRouter = createRouter()
  router.matcher = newRouter.matcher // reset router
}

export default router
