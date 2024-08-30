import { RouteRecordRaw } from '@/router'

// 定义模块类型
interface RouteModuleType {
  default: RouteRecordRaw[]
}

const mergeRouteModules = (routeModules: Record<string, unknown>) => {
  const mergedRoutes: RouteRecordRaw[] = []

  for (const routeModule of Object.values(routeModules)) {
    const moduleRoutes = (routeModule as RouteModuleType)?.default ?? []
    mergedRoutes.push(...moduleRoutes)
  }

  return mergedRoutes
}

export { mergeRouteModules }
export type { RouteModuleType }
