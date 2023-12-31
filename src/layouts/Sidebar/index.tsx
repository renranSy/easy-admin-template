import { Menu, MenuProps } from 'antd'
import {
  AppstoreOutlined,
  BugOutlined,
  DashboardOutlined,
  MenuOutlined,
  RocketOutlined,
  UserOutlined
} from '@ant-design/icons'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { useEffect, useState } from 'react'
import Sider from 'antd/es/layout/Sider'

export const MenuItems = [
  { label: '工作台', key: '/', icon: <DashboardOutlined style={{ fontSize: '18px' }} /> },
  { label: '用户', key: '/user', icon: <UserOutlined style={{ fontSize: '18px' }} /> },
  { label: '资源推荐', key: '/resource', icon: <RocketOutlined style={{ fontSize: '18px' }} /> },
  { label: '系统信息', key: '/info', icon: <AppstoreOutlined style={{ fontSize: '18px' }} /> },
  {
    label: '多级菜单',
    key: '/multi',
    icon: <MenuOutlined style={{ fontSize: '18px' }} />,
    children: [
      {
        label: '一级菜单',
        key: '/one'
      },
      {
        label: '二级菜单',
        key: '/two',
        children: [
          { label: '页面一', key: '/two/one' },
          { label: '页面二', key: '/two/two' }
        ]
      }
    ]
  },
  {
    label: '错误页面',
    key: '/error',
    icon: <BugOutlined style={{ fontSize: '18px' }} />,
    children: [
      {
        label: '404',
        key: '/404'
      },
      {
        label: '403',
        key: '/403'
      }
    ]
  }
]

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const [collapsed, setCollapsed] = useState(false)

  const [windowWidth, setWindowWidth] = useState(0)

  const windowResize = () => {
    setWindowWidth(window.innerWidth)
  }

  // 菜单展开收起
  useEffect(() => {
    windowWidth < 992 ? setCollapsed(true) : setCollapsed(false)
  }, [windowWidth])

  useEffect(() => {
    setWindowWidth(window.innerWidth)

    window.addEventListener('resize', windowResize)

    return () => {
      window.removeEventListener('resize', windowResize)
    }
  }, [])

  const handleClickMenuItem: MenuProps['onClick'] = (e) => {
    navigate(e.key)
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
      className="shadow-lg"
      width="200"
      style={{ height: 'calc(100vh - 56px)' }}>
      <Menu
        className="h-full"
        defaultSelectedKeys={[location.pathname]}
        selectedKeys={[location.pathname]}
        onClick={handleClickMenuItem}
        items={MenuItems}
        mode="inline"></Menu>
    </Sider>
  )
}

export default Sidebar
