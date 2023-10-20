import React from 'react'
import './index.less'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { App as AntdApp, ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import Home from './views/home'
import Test from './views/test'
import Layouts from './layouts'
import User from './views/user'
import SystemInfo from './views/systemInfo'
import One from '@/views/multiMenu/one'
import PageOne from '@/views/multiMenu/two/pageOne'
import PageTwo from '@/views/multiMenu/two/pageTwo'
import Resource from '@/views/resource/resource'
import Login from '@/views/login'
import Error404 from '@/views/error/404'
import Error500 from '@/views/error/403';

function App() {
  return (
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <AntdApp>
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/" element={<Layouts />}>
              <Route path="/" element={<Home />} />
              <Route path="/user" element={<User />} />
              <Route path="/info" element={<SystemInfo />} />
              <Route path="/resource" element={<Resource />} />
              <Route path="/one" element={<One />} />
              <Route path="/two/one" element={<PageOne />} />
              <Route path="/two/two" element={<PageTwo />} />
              <Route path="/404" element={<Error404 />} />
              <Route path="/403" element={<Error500 />} />
            </Route>
            <Route path="/test" element={<Test />} />
            <Route path="*" element={<Error404 />} />
          </Routes>
        </AntdApp>
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
