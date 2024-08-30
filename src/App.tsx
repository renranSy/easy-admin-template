import React, { lazy, ReactElement, Suspense, useEffect } from 'react'
import './index.less'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { App as AntdApp, ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import { RootState } from '@/store'
import { useDispatch, useSelector } from 'react-redux'
import { initTheme } from '@/store/theme'
import IContextMenu from '@/components/IContextMenuWrapper/IContextMenu'
import { dynamicRoutes, RouteRecordRaw } from '@/router'
import { coreRoutes } from '@/router/core'

const NLoading = lazy(() => import('@/components/NLoading'))
const Layouts = lazy(() => import('@/layouts'))

const load = (children: ReactElement) => <Suspense fallback={<NLoading />}>{children}</Suspense>

function App() {
  const themeState = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(initTheme())
  }, [])

  const getRoutes = () => {
    const result: ReactElement[] = []

    const dfs = (route: RouteRecordRaw) => {
      if (route.component) {
        result.push(<Route path={route.path} key={route.path} element={load(route.component)} />)
      }
      if (!route.children) {
        return
      }
      if (route.children.length > 0) {
        for (const child of route.children) {
          dfs(child)
        }
      }
    }

    for (const route of dynamicRoutes) {
      dfs(route)
    }

    return result
  }

  const getCoreRoutes = () => {
    const result: ReactElement[] = []
    coreRoutes.forEach((route) => {
      if (route.component) {
        result.push(<Route path={route.path} key={route.path} element={load(route.component)} />)
      }
    })
    return result
  }
  return (
    <>
      <HashRouter>
        <ConfigProvider
          locale={zhCN}
          theme={{
            token: {
              colorPrimary: themeState.primaryColor
            }
          }}>
          <AntdApp>
            <Routes>
              <Route path="/" element={<Layouts />}>
                {getRoutes().map((item) => item)}
              </Route>
              {getCoreRoutes().map((item) => item)}
            </Routes>
          </AntdApp>
        </ConfigProvider>
        <IContextMenu />
      </HashRouter>
    </>
  )
}

export default App
