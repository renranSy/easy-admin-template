import React, { JSX, lazy, Suspense } from 'react'
import './index.less'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { App as AntdApp, ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

const NLoading = lazy(() => import('@/components/NLoading'))
const Layouts = lazy(() => import('@/layouts'))
const User = lazy(() => import('@/views/user'))
const Home = lazy(() => import('@/views/home'))
const Test = lazy(() => import('@/views/test'))
const SystemInfo = lazy(() => import('@/views/systemInfo'))
const One = lazy(() => import('@/views/multiMenu/one'))
const PageOne = lazy(() => import('@/views/multiMenu/two/pageOne'))
const PageTwo = lazy(() => import('@/views/multiMenu/two/pageTwo'))
const Resource = lazy(() => import('@/views/resource'))
const Login = lazy(() => import('@/views/login'))
const Error404 = lazy(() => import('@/views/error/404'))
const Error403 = lazy(() => import('@/views/error/403'))

const load = (children: JSX.Element) => <Suspense fallback={<NLoading />}>{children}</Suspense>

function App() {
  return (
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <AntdApp>
          <Routes>
            <Route path="/login" element={load(<Login />)} />
            <Route path="/" element={<Layouts />}>
              <Route path="/" element={load(<Home />)} />
              <Route path="/user" element={load(<User />)} />
              <Route path="/info" element={load(<SystemInfo />)} />
              <Route path="/resource" element={load(<Resource />)} />
              <Route path="/one" element={load(<One />)} />
              <Route path="/two/one" element={load(<PageOne />)} />
              <Route path="/two/two" element={load(<PageTwo />)} />
              <Route path="/404" element={load(<Error404 />)} />
              <Route path="/403" element={load(<Error403 />)} />
            </Route>
            <Route path="/test" element={load(<Test />)} />
            <Route path="*" element={load(<Error404 />)} />
          </Routes>
        </AntdApp>
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
