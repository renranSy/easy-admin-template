import { RouteRecordRaw } from '@/router'
import { IconBox, IconCopyright, IconDashboard, IconMenu2, IconRocket, IconUsers } from '@tabler/icons-react'
import React, { lazy } from 'react'

const User = lazy(() => import('@/views/user'))
const Home = lazy(() => import('@/views/home'))
const RichEditor = lazy(() => import('@/views/feature/richEditor'))
const About = lazy(() => import('@/views/about'))
const One = lazy(() => import('@/views/multiMenu/one'))
const PageOne = lazy(() => import('@/views/multiMenu/two/pageOne'))
const PageTwo = lazy(() => import('@/views/multiMenu/two/pageTwo'))
const Resource = lazy(() => import('@/views/resource'))

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    name: 'DashBoard',
    component: <Home />,
    meta: {
      label: '工作台',
      icon: <IconDashboard size="22px" />
    }
  },
  {
    path: '/user',
    name: 'User',
    component: <User />,
    meta: {
      label: '用户',
      icon: <IconUsers size="22px" />
    }
  },
  {
    path: '/feature',
    name: 'Feature',
    meta: {
      label: '功能',
      icon: <IconBox size="22px" />
    },
    children: [
      {
        path: '/feature/rich-editor',
        name: 'RichEditor',
        component: <RichEditor />,
        meta: {
          label: '富文本编辑器'
        }
      }
    ]
  },
  {
    path: '/resource',
    name: 'Resource',
    component: <Resource />,
    meta: {
      label: '资源推荐',
      icon: <IconRocket size="22px" />
    }
  },
  {
    path: '/multi',
    name: 'Multi',
    meta: {
      label: '多级菜单',
      icon: <IconMenu2 style={{ fontSize: '18px' }} />
    },
    children: [
      {
        path: '/multi/one',
        name: 'MultiOne',
        component: <One />,
        meta: {
          label: '一级菜单'
        }
      },
      {
        path: '/multi/two',
        name: 'MultiTwo',
        meta: {
          label: '二级菜单'
        },
        children: [
          {
            path: '/multi/two/one',
            name: 'MultiTwoOne',
            component: <PageOne />,
            meta: {
              label: '页面一'
            }
          },
          {
            path: '/multi/two/two',
            name: 'MultiTwoTwo',
            component: <PageTwo />,
            meta: {
              label: '页面二'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: <About />,
    meta: {
      label: '关于',
      icon: <IconCopyright size="22px" />
    }
  }
]

export default routes
