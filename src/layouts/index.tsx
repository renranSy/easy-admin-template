import EasyHeader from './header'
import EasySidebar from './Sidebar'
import EasyNavbar from '@/layouts/navbar'
import React from 'react'
import { Layout } from 'antd'
import { Content } from 'antd/es/layout/layout'
import { Outlet } from 'react-router-dom'

const Layouts = () => {
  return (
    <Layout>
      <EasyHeader />
      <Layout>
        <EasySidebar />
        <Content>
          <EasyNavbar />
          <Content style={{ height: 'calc(100vh - 70px - 40px)', overflowY: 'scroll' }} className="px-4 pt-4">
            <Outlet />
          </Content>
        </Content>
      </Layout>
    </Layout>
  )
}

export default Layouts
