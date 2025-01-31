import { Menu, MenuProps } from 'antd'
import { useLocation, useNavigate } from 'react-router-dom'
import React, { ReactNode, useEffect, useState } from 'react'
import Sider from 'antd/es/layout/Sider'
import { RouteRecordRaw } from '@/router'
import dashboard from '@/router/modules/dashboard'
import useI18n from '@/hooks/useI18n'

type MenuItem = {
  key: string
  label: string
  icon?: ReactNode
  children?: MenuItem[]
}

const convertRoutesToMenuItems = (routes: RouteRecordRaw[]): MenuItem[] => {
  return routes.map((route) => {
    if (!route.meta?.label) {
      throw new Error('error convert routes')
    }
    const menuItem: MenuItem = route.meta?.icon
      ? {
          label: route.meta.label,
          key: route.path,
          icon: route.meta?.icon
        }
      : {
          label: route.meta.label,
          key: route.path
        }

    if (route.children) {
      menuItem.children = convertRoutesToMenuItems(route.children)
    }
    return menuItem
  })
}

export const MenuItems = convertRoutesToMenuItems(dashboard)

const Sidebar = () => {
  const location = useLocation()
  const navigate = useNavigate()
  const { t } = useI18n()

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

  const translateMenus = (menuItems: MenuItem[]) => {
    return menuItems.map((item) => {
      item.label = t(item.label)
      if (item.children) {
        translateMenus(item.children)
      }
      return item
    })
  }

  return (
    <Sider
      collapsible
      collapsed={collapsed}
      onCollapse={(value) => setCollapsed(value)}
      theme="light"
      className="shadow-lg"
      width="200"
      style={{ height: 'calc(100vh - 56px)', overflowY: 'scroll' }}>
      <Menu
        className="h-full"
        defaultSelectedKeys={[location.pathname]}
        selectedKeys={[location.pathname]}
        onClick={handleClickMenuItem}
        items={translateMenus(convertRoutesToMenuItems(dashboard))}
        mode="inline"></Menu>
    </Sider>
  )
}

export default Sidebar
