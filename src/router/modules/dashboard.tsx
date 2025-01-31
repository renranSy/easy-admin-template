import { RouteRecordRaw } from '@/router'
import {
  IconAdjustments,
  IconBox,
  IconCopyright,
  IconDashboard,
  IconMenu2,
  IconRocket,
  IconSettings,
  IconUser,
  IconUsers
} from '@tabler/icons-react'
import React, { lazy } from 'react'
import Admin from '@/views/system/admin'
import Role from '@/views/system/role'
import Menu from '@/views/system/menu'

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
    name: 'Workbench',
    component: <Home />,
    meta: {
      label: 'menus.workbench',
      icon: <IconDashboard size="22px" />
    }
  },
  {
    path: '/user',
    name: 'User',
    component: <User />,
    meta: {
      label: 'menus.user',
      icon: <IconUser size="22px" />
    }
  },
  {
    path: '/feature',
    name: 'Feature',
    meta: {
      label: 'menus.feature.text',
      icon: <IconBox size="22px" />
    },
    children: [
      {
        path: '/feature/rich-editor',
        name: 'RichEditor',
        component: <RichEditor />,
        meta: {
          label: 'menus.feature.markdown'
        }
      }
    ]
  },
  {
    path: '/resource',
    name: 'Resource',
    component: <Resource />,
    meta: {
      label: 'menus.resource',
      icon: <IconRocket size="22px" />
    }
  },
  {
    path: '/multi',
    name: 'Multi',
    meta: {
      label: 'menus.multiMenu.text',
      icon: <IconMenu2 style={{ fontSize: '18px' }} />
    },
    children: [
      {
        path: '/multi/one',
        name: 'MultiOne',
        component: <One />,
        meta: {
          label: 'menus.multiMenu.one'
        }
      },
      {
        path: '/multi/two',
        name: 'MultiTwo',
        meta: {
          label: 'menus.multiMenu.two.text'
        },
        children: [
          {
            path: '/multi/two/one',
            name: 'MultiTwoOne',
            component: <PageOne />,
            meta: {
              label: 'menus.multiMenu.two.pageOne'
            }
          },
          {
            path: '/multi/two/two',
            name: 'MultiTwoTwo',
            component: <PageTwo />,
            meta: {
              label: 'menus.multiMenu.two.pageTwo'
            }
          }
        ]
      }
    ]
  },
  {
    path: '/system',
    name: 'System',
    meta: {
      label: 'menus.system.text',
      icon: <IconSettings size="22px" />
    },
    children: [
      {
        path: '/system/admin',
        name: 'Admin',
        component: <Admin />,
        meta: {
          label: 'menus.system.admin',
          icon: <IconUsers size="22px" />
        }
      },
      {
        path: '/system/role',
        name: 'Admin',
        component: <Role />,
        meta: {
          label: 'menus.system.role',
          icon: <IconAdjustments size="22px" />
        }
      },
      {
        path: '/system/menu',
        name: 'Admin',
        component: <Menu />,
        meta: {
          label: 'menus.system.menu',
          icon: <IconMenu2 size="22px" />
        }
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: <About />,
    meta: {
      label: 'menus.about',
      icon: <IconCopyright size="22px" />
    }
  }
]

export default routes
