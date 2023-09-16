import { useLocation, useNavigate } from 'react-router-dom'
import { useEffect, useState } from 'react'
import cache from '@/utils/cache'
import { MenuItems } from '@/layouts/Sidebar'

export type Tab = {
  pathname: string
  label: string
}
export type Item = {
  label: string
  key: string
  children?: Item[]
}
let TAB_LIST: Tab[] = []

const flattenMenu = (menu: Item[]) => {
  const flattenedMenu: Item[] = []

  const flatten = (menuItems: Item[], parentKey = '') => {
    menuItems.forEach((item) => {
      const itemKey = parentKey + item.key
      flattenedMenu.push(item)

      if (item.children) {
        flatten(item.children, itemKey + '/')
      }
    })
  }

  flatten(menu)
  return flattenedMenu
}

const getLabel = (pathname: string) => {
  return TAB_LIST.filter((item) => item.pathname === pathname)[0].label
}

export const useTab = () => {
  TAB_LIST = flattenMenu(MenuItems).map((item) => {
    return {
      label: item.label,
      pathname: item.key
    }
  })

  const location = useLocation()
  const navigate = useNavigate()

  const [activeTab, setActiveTab] = useState<Tab>({
    pathname: location.pathname,
    label: getLabel(location.pathname)
  })
  const [tabList, setTabList] = useState<Tab[]>(
    JSON.parse(cache.get('tabList')) || [
      {
        pathname: '/',
        label: getLabel('/')
      }
    ]
  )

  // 监听路由
  useEffect(() => {
    setActiveTab({ pathname: location.pathname, label: getLabel(location.pathname) })
    addTab({ pathname: location.pathname, label: getLabel(location.pathname) })
  }, [location.pathname])

  // 添加标签
  const addTab = (tab: Tab) => {
    const hasTab = tabList.findIndex((item) => item.pathname === tab.pathname) !== -1

    if (!hasTab) {
      setTabList([...tabList, tab])
      cache.set('tabList', JSON.stringify([...tabList, tab]))
    }
  }

  // 点击标签标签
  const clickTab = (tab: Tab) => {
    setActiveTab(tab)
    navigate(tab.pathname)
  }

  useEffect(() => {
    if (tabList.length === 0) {
      setTabList([{ pathname: '/', label: getLabel('/') }])
      setActiveTab({ pathname: '/', label: getLabel('/') })
      navigate('/')
    }
  }, [tabList])
  // 关闭标签
  const closeTab = (tab: Tab) => {
    if (tab.pathname === activeTab.pathname && tabList.length > 1) {
      setActiveTab(tabList.filter((item) => item.pathname !== tab.pathname).slice(-1)[0])
      navigate(tabList.filter((item) => item.pathname !== tab.pathname).slice(-1)[0].pathname)
    }
    setTabList(tabList.filter((item) => item.pathname !== tab.pathname))
    cache.set('tabList', JSON.stringify(tabList.filter((item) => item.pathname !== tab.pathname)))
  }

  return {
    activeTab,
    tabList,
    clickTab,
    closeTab
  }
}
