import { Menu, MenuProps } from 'antd'
import { AppstoreOutlined, DashboardOutlined, MenuOutlined, RocketOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import React from 'react'

// type MenuItem = Required<MenuProps>['items'][number]

// const getItem = (
//   label: React.ReactNode,
//   key?: React.Key | null,
//   icon?: React.ReactNode,
//   children?: MenuItem[]
// ): MenuItem => {
//   return {
//     key,
//     icon,
//     children,
//     label
//   } as MenuItem
// }

// export const MenuItems = [
//   getItem('主页', '/', <HomeOutlined />),
//   getItem('用户', '/user', <UserOutlined />),
//   getItem('系统信息', '/system/info', <AppstoreOutlined />),
//   getItem('多级菜单', null, <MenuOutlined />, [
//     getItem('一级菜单', '/one'),
//     getItem('二级菜单', null, null, [getItem('页面一', '/two/one'), getItem('页面二', '/two/two')])
//   ])
// ]
export const MenuItems = [
  { label: '主页', key: '/', icon: <DashboardOutlined /> },
  { label: '用户', key: '/user', icon: <UserOutlined /> },
  { label: '系统信息', key: '/info', icon: <AppstoreOutlined /> },
  { label: '资源推荐', key: '/resource', icon: <RocketOutlined /> },
  {
    label: '多级菜单',
    key: '/multi',
    icon: <MenuOutlined />,
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
  }
]

const Sidebar = () => {
  const navigate = useNavigate()
  const onClick: MenuProps['onClick'] = (e) => {
    navigate(e.key)
    console.log(MenuItems)
  }

  return (
    <div className="shadow-lg h-full">
      <Menu style={{ height: '100%' }} onClick={onClick} items={MenuItems} mode="inline"></Menu>
    </div>
  )
}

export default Sidebar
