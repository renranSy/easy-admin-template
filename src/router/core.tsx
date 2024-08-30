import { RouteRecordRaw } from '@/router/index'
import React, { lazy } from 'react'

const Test = lazy(() => import('@/views/test'))
const Login = lazy(() => import('@/views/login'))
const Error404 = lazy(() => import('@/views/error/404'))
const Error403 = lazy(() => import('@/views/error/403'))

const fallbackNotFoundRoute: RouteRecordRaw = {
  path: '*',
  name: '404',
  component: <Error404 />
}

const fallbackNoAuthRoute: RouteRecordRaw = {
  path: '/403',
  name: '403',
  component: <Error403 />
}

const coreRoutes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'Login',
    component: <Login />
  },
  {
    path: '/test',
    name: 'Test',
    component: <Test />
  }
]

export { coreRoutes, fallbackNotFoundRoute, fallbackNoAuthRoute }
