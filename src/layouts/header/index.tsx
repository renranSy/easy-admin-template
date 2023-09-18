import React, { createRef, useEffect, useState } from 'react'
import { Avatar, Dropdown, Input, InputRef } from 'antd'

import {
  CaretDownFilled,
  FullscreenOutlined,
  LogoutOutlined,
  ReloadOutlined,
  SearchOutlined,
  SettingOutlined,
  UserOutlined
} from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'

const Header = () => {
  const navigate = useNavigate()

  const [searchInputWidth, setSearchInputWidth] = useState(0)
  const searchRef = createRef<InputRef>()
  const clickSearch = (e: React.MouseEvent<HTMLSpanElement>) => {
    e.stopPropagation()
    setSearchInputWidth(240)
    console.log(searchRef)
    searchRef.current!.focus()
  }

  const blurSearch = () => {
    setSearchInputWidth(0)
  }

  useEffect(() => {
    document.body.addEventListener('click', blurSearch)

    return () => {
      document.body.removeEventListener('click', blurSearch)
    }
  }, [])

  return (
    <>
      <div
        className="flex items-center justify-between bg-white shadow-sm px-7 w-full"
        style={{
          height: '56px',
          borderBottom: '1px solid #e4e4e4',
          position: 'relative',
          zIndex: '999'
        }}>
        <div className="flex items-center">
          <img style={{ width: '36px', height: '36px' }} src="/logo.svg" alt="" />
          <div className="font-bold ml-3" style={{ fontSize: 20 }}>
            Easy Admin
          </div>
        </div>
        <div className="flex items-center h-full">
          <div className="flex items-center mr-2 h-full hover:bg-gray-1" style={{ transition: 'all 0.2s ease-in-out' }}>
            <div className="h-full px-2 cursor-pointer hover:bg-gray-1" style={{ transition: 'all 0.2s ease-in-out' }}>
              <SearchOutlined
                onClick={(e) => clickSearch(e)}
                className="h-full active:text-blue-4"
                style={{ fontSize: '20px' }}
              />
            </div>
            <div
              onClick={(e) => {
                e.stopPropagation()
              }}
              style={{
                width: searchInputWidth,
                overflow: 'hidden',
                transition: 'all 0.2s ease-in-out'
              }}>
              <Input ref={searchRef} onBlur={() => blurSearch()} placeholder="Search" />
            </div>
          </div>
          <div
            className="flex items-center mr-2 px-2 h-full  cursor-pointer hover:bg-gray-1"
            style={{ transition: 'all 0.2s ease-in-out' }}>
            <FullscreenOutlined
              onClick={async () => {
                await document.documentElement.requestFullscreen()
              }}
              className="active:text-blue-4"
              style={{ fontSize: '20px' }}
            />
          </div>
          <div
            className="flex items-center mr-2 px-2 h-full  cursor-pointer hover:bg-gray-1"
            style={{ transition: 'all 0.2s ease-in-out' }}>
            <ReloadOutlined
              onClick={() => {
                location.reload()
              }}
              className="active:text-blue-4"
              style={{ fontSize: '18px' }}
            />
          </div>

          <Dropdown
            menu={{
              items: [
                {
                  key: '1',
                  label: (
                    <div>
                      <UserOutlined style={{ fontSize: '14px' }} />
                      <span className="ml-1">个人中心</span>
                    </div>
                  )
                },
                {
                  key: '2',
                  label: (
                    <div>
                      <SettingOutlined style={{ fontSize: '14px' }} />
                      <span className="ml-1">个人设置</span>
                    </div>
                  )
                },
                {
                  key: '3',
                  label: (
                    <div
                      onClick={() => {
                        navigate('/login')
                      }}>
                      <LogoutOutlined style={{ fontSize: '14px' }} />
                      <span className="ml-1">退出登录</span>
                    </div>
                  )
                }
              ]
            }}
            placement="bottom"
            arrow>
            <div
              className="flex items-center px-2 h-full  cursor-pointer"
              style={{ transition: 'all 0.2s ease-in-out' }}>
              <Avatar
                src="/src/assets/avatar.gif"
                style={{
                  width: '40px',
                  height: '40px'
                }}
              />
              <span className="ms-1">荏苒</span>
              <CaretDownFilled />
            </div>
          </Dropdown>
        </div>
      </div>
    </>
  )
}

export default Header
