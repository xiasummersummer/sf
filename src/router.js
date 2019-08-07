import Vue from 'vue'
import Router from 'vue-router'
// import Home from '@/views/Home'
Vue.use(Router)

const Footer = () => import('@/components/common/Footer')

const router = new Router({
  mode: 'history',
  // base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      redirect: '/home'
    },
    {
      path: '/home',
      name: 'home',
      components: {
        default: () => import('@/views/Home'),
        footer: Footer
      }
    },
    {
      path: '/detail',
      // path: '/detail/:id',
      name: 'detail',
      components: {
        default: () => import('@/views/Detail')
      }
    },
    {
      path: '/aboutpro',
      // path: '/detail/:id',
      name: 'aboutpro',
      components: {
        default: () => import('@/views/Aboutpro')
      }
    },
    {
      path: '/kind',
      name: 'kind',
      components: {
        default: () => import('./views/Kind'),
        footer: () => import('@/components/common/Footer')
      }
    },
    {
      path: '/find',
      name: 'find',
      components: {
        default: () => import('./views/Find'),
        footer: () => import('@/components/common/Footer')
      },
      children: [
        {
          path: 'find1',
          component: () => import('@/components/find/Find1')
        },
        {
          path: 'find2',
          component: () => import('@/components/find/Find2')
        },
        {
          path: 'find3',
          component: () => import('@/components/find/Find3')
        }
      ]
    },
    {
      path: '/cart',
      name: 'cart',
      components: {
        default: () => import('./views/Cart'),
        footer: () => import('@/components/common/Footer')
      }
    },
    {
      path: '/count',
      name: 'count',
      components: {
        default: () => import('@/components/car/Count'),
        footer: () => import('@/components/common/Footer')
      }
    },
    {
      path: '/login',
      name: 'login',
      components: {
        default: () => import('./views/Login'),
        footer: () => import('@/components/common/Footer')
      }
    },
    {
      path: '/user',
      name: 'user',
      components: {
        default: () => import('./views/User')
        // footer: () => import('@/components/common/Footer')
      },
      children: [
        {
          path: 'nologin',
          component: () => import('@/components/user/Nologin')
        },
        {
          path: 'msglogin',
          component: () => import('@/components/user/Msglogin')
        }
      ]
    }
  ]
})

export default router
