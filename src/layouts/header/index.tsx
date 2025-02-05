import React, { useEffect, useState } from 'react'
import { Avatar, Dropdown, message, Select } from 'antd'

import { CaretDownFilled, LogoutOutlined, SettingOutlined, UserOutlined } from '@ant-design/icons'
import { useNavigate } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import useAsync from '@/hooks/useAsync'
import { setUserInfo } from '@/store/user'
import cache from '@/utils/cache'
import { IconArrowsMaximize, IconArrowsMinimize, IconReload, IconSearch, IconShirt } from '@tabler/icons-react'
import ThemeDrawer from '@/components/ThemeDrawer'
import api from '@/api'
import useI18n from '@/hooks/useI18n'
import { dynamicRoutes, RouteRecordRaw } from '@/router'
import Fuse, { FuseResult } from 'fuse.js'
import { traverseTreeValues } from '@/utils/tree'
import { TFunction } from 'i18next'
import logoImg from '@/assets/logo.svg'

type SearchData = {
  path: string
  name: string
  label?: string
}

const getSearchData = (t: TFunction<'translation', undefined>) => {
  return traverseTreeValues<
    RouteRecordRaw,
    {
      name: string
      path: string
      label?: string
      children: RouteRecordRaw[] | undefined
    }
  >(dynamicRoutes, (item) => ({
    path: item.path,
    name: item.name,
    label: t(item.meta?.label || ''),
    children: item.children
  }))
    .filter((item) => !item.children)
    .map((item) => ({ name: item.name, path: item.path, label: item.label }))
}

const Header = () => {
  const { t, lang, changeLanguage } = useI18n()
  const navigate = useNavigate()
  const userState = useSelector((state: RootState) => state.user)
  const [showTheme, setShowTheme] = useState(false)
  const dispatch = useDispatch()

  const [isFullScreen, setIsFullScreen] = useState(false)

  const fuse = new Fuse(getSearchData(t), {
    keys: ['path', 'name', 'label'], // 搜索字段
    includeScore: true, // 返回匹配得分
    threshold: 0.3 // 设置模糊搜索的阈值
  })
  const [searchInputWidth, setSearchInputWidth] = useState(0)
  const clickSearch = (e: React.MouseEvent<SVGElement>) => {
    e.stopPropagation()
    setSearchInputWidth(240)
  }

  const blurSearch = () => {
    setSearchInputWidth(0)
  }

  const [searchValue, setSearchValue] = useState('')
  const [searchOptions, setSearchOptions] = useState<FuseResult<SearchData>[]>([])

  const handleSearch = (value: string) => {
    setSearchValue(value)
  }

  useEffect(() => {
    const searchResults = fuse.search(searchValue)
    setSearchOptions(searchResults)
  }, [searchValue])

  const handleSelect = (value: string) => {
    navigate(value)
    setSearchValue('')
  }

  useEffect(() => {
    document.body.addEventListener('click', blurSearch)

    return () => {
      document.body.removeEventListener('click', blurSearch)
    }
  }, [])

  // 获取管理员信息
  useAsync(async () => {
    const resp = await api.getUserInfo()
    if (resp.code === 200) {
      dispatch(setUserInfo(resp.data))
    } else {
      navigate('/login')
      message.warning(resp.message)
    }
  })

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
          <img style={{ width: '36px', height: '36px' }} src={logoImg} alt="" />
          <div className="font-bold ml-3" style={{ fontSize: 20 }}>
            Easy Admin
          </div>
        </div>
        <div className="flex items-center h-full">
          <div className="flex items-center mr-2 h-full hover:bg-gray-1" style={{ transition: 'all 0.2s ease-in-out' }}>
            <div className="h-full px-2 cursor-pointer hover:bg-gray-1" style={{ transition: 'all 0.2s ease-in-out' }}>
              <IconSearch
                onClick={(e) => clickSearch(e)}
                className="h-full active:text-blue-4 text-gray-5"
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
              <Select
                value={searchValue}
                showSearch
                defaultActiveFirstOption={false}
                filterOption={false}
                suffixIcon={null}
                allowClear
                onSearch={handleSearch}
                options={(searchOptions || []).map((data) => ({
                  value: data.item.path,
                  label: data.item.label
                }))}
                onSelect={handleSelect}
                className="w-full"
              />
              {/*<Input ref={searchRef} onChange={handleSearch} onBlur={() => blurSearch()} placeholder="Search" />*/}
            </div>
          </div>
          <div
            className="flex items-center mr-2 px-2 h-full  cursor-pointer hover:bg-gray-1"
            style={{ transition: 'all 0.2s ease-in-out' }}>
            {isFullScreen ? (
              <IconArrowsMinimize
                onClick={async () => {
                  await document.exitFullscreen()
                  setIsFullScreen(false)
                }}
                className="active:text-blue-4 text-gray-5"
                style={{ fontSize: '20px' }}
              />
            ) : (
              <IconArrowsMaximize
                onClick={async () => {
                  await document.documentElement.requestFullscreen()
                  setIsFullScreen(true)
                }}
                className="active:text-blue-4 text-gray-5"
                style={{ fontSize: '20px' }}
              />
            )}
          </div>
          <div
            className="flex items-center mr-2 px-2 h-full  cursor-pointer hover:bg-gray-1"
            style={{ transition: 'all 0.2s ease-in-out' }}>
            <IconReload
              onClick={() => {
                location.reload()
              }}
              className="active:text-blue-4 text-gray-5"
              style={{ fontSize: '18px' }}
            />
          </div>
          <div
            className="flex items-center mr-2 px-2 h-full  cursor-pointer hover:bg-gray-1"
            style={{ transition: 'all 0.2s ease-in-out' }}>
            <IconShirt
              onClick={() => {
                setShowTheme(true)
              }}
              className="active:text-blue-4 text-gray-5"
              style={{ fontSize: '18px' }}
            />
          </div>
          <div
            className="flex items-center mr-2 px-2 h-full  cursor-pointer hover:bg-gray-1"
            style={{ transition: 'all 0.2s ease-in-out' }}>
            {lang === 'zh' ? (
              <div
                onClick={() => {
                  changeLanguage('en')
                }}
                className="text-lg text-gray-5">
                中
              </div>
            ) : (
              <div
                onClick={() => {
                  changeLanguage('zh')
                }}
                className="text-lg text-gray-5">
                En
              </div>
            )}
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
                        cache.remove('token')
                        message.success('退出登录成功')
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
                src="https://wpimg.wallstcn.com/f778738c-e4f8-4870-b634-56703b4acafe.gif?imageView2/1/w/80/h/80"
                style={{
                  width: '40px',
                  height: '40px'
                }}
              />
              <span className="ms-1">{userState.username}</span>
              <CaretDownFilled />
            </div>
          </Dropdown>
        </div>
      </div>

      <ThemeDrawer open={showTheme} setOpen={setShowTheme} />
    </>
  )
}

export default Header
