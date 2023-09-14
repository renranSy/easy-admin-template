import React from 'react'
import './index.less'
import { HashRouter, Route, Routes } from 'react-router-dom'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'
import Home from './views/home'
import Test from './views/test'
import Layouts from './layouts'
import User from './views/user'
import SystemInfo from './views/systemInfo'
import One from '@/views/multiMenu/one'
import PageOne from '@/views/multiMenu/two/pageOne'
import PageTwo from '@/views/multiMenu/two/pageTwo'

function App() {
  return (
    <HashRouter>
      <ConfigProvider locale={zhCN}>
        <Routes>
          <Route path="/" element={<Layouts />}>
            <Route path="/" element={<Home />} />
            <Route path="/user" element={<User />} />
            <Route path="/system/info" element={<SystemInfo />} />
            <Route path="/one" element={<One />} />
            <Route path="/two/one" element={<PageOne />} />
            <Route path="/two/two" element={<PageTwo />} />
          </Route>
          <Route path="/test" element={<Test />} />
        </Routes>
      </ConfigProvider>
    </HashRouter>
  )
}

export default App
