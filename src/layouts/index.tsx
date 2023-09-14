import EasyHeader from './header'
import EasySidebar from './Sidebar'
import EasyNavbar from '@/layouts/navbar'
import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import Sider from 'antd/es/layout/Sider'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <Layout>
      <EasyHeader />
      <Layout>
        <Sider style={{ height: 'calc(100vh - 70px)' }} width={200}>
          <EasySidebar />
        </Sider>
        <Layout>
          <EasyNavbar />
          <Content style={{ height: 'calc(100vh - 70px - 40px)', overflowY: 'scroll' }} className="px-4 pt-4">
            <Outlet />
          </Content>
        </Layout>
      </Layout>
    </Layout>
  )
}

export default Layouts
