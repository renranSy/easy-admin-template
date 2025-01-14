import { ReactElement, ReactNode } from 'react'
import { coreRoutes, fallbackNoAuthRoute, fallbackNotFoundRoute } from '@/router/core'
import { mergeRouteModules } from '@/utils/helpers'
import { traverseTreeValues } from '@/utils/tree'

export type RouteRecordRaw = {
  path: string
  name: string
  component?: ReactElement
  meta?: {
    label?: string
    icon?: ReactNode
  }
  children?: RouteRecordRaw[]
}

const dynamicRouteFiles = import.meta.glob('./modules/**/*.tsx', {
  eager: true
})

const dynamicRoutes: RouteRecordRaw[] = mergeRouteModules(dynamicRouteFiles)

const externalRoutes: RouteRecordRaw[] = [...coreRoutes, fallbackNoAuthRoute, fallbackNotFoundRoute]

const RouteWhiteList = [...traverseTreeValues<RouteRecordRaw, string>(coreRoutes, (route) => route.path)]

export { RouteWhiteList, dynamicRoutes, externalRoutes }
