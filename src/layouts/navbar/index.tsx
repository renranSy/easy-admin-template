import React from 'react'
import './index.less'
import { DefaultTab, Tab, useTab } from '@/hooks/useTab'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Space } from 'antd'
import { IconX } from '@tabler/icons-react'
import IContextMenuWrapper from '../../components/IContextMenuWrapper'
import IContextMenuItem, { IContextMenuOption } from '@/components/IContextMenuWrapper/IContextMenuItem'

export const Navbar = () => {
  const { activeTab, tabList, clickTab, closeTab, closeTabList } = useTab()
  const [parent] = useAutoAnimate()

  const options: IContextMenuOption[] = [
    {
      key: 'close',
      name: '关闭',
      icon: 'x',
      divider: true
    },
    {
      key: 'closeLeft',
      name: '关闭左侧标签页',
      icon: 'arrowBarToLeft'
    },
    {
      key: 'closeRight',
      name: '关闭右侧标签页',
      icon: 'arrowBarToRight',
      divider: true
    },
    {
      key: 'closeOther',
      name: '关闭其他标签页',
      icon: 'arrowBarBoth'
    },
    {
      key: 'closeAll',
      name: '关闭所有标签页',
      icon: 'arrowsRightLeft'
    }
  ]

  const Close = (props: { tab: Tab }) => {
    if (props.tab.pathname === '/' && tabList.length === 1) {
      return <span className="pr-2"></span>
    }
    return (
      <IconX
        onClick={() => closeTab(props.tab)}
        className="ml-1 cursor-pointer hover:color-gray-7 color-[#707987] transition-all"
        size="14"
      />
    )
  }

  const onSetOptions = (activeKey: string) => {
    return options.map((item) => {
      let disabled = false
      const index = tabList.findIndex((item) => {
        return item.pathname === activeKey
      })
      switch (item.key) {
        case 'closeLeft':
          if (index === 0) {
            disabled = true
          }
          break
        case 'closeRight':
          if (index === tabList.length - 1) {
            disabled = true
          }
          break
        case 'closeOther':
          if (tabList.length === 1) {
            disabled = true
          }
          break
        case 'closeAll':
          if (tabList.length === 1 && activeTab.pathname === DefaultTab.pathname) {
            disabled = true
          }
      }
      return {
        ...item,
        disabled
      }
    })
  }

  const onClickMenu = (eventName: string, activeKey: string) => {
    const tabIndex = tabList.findIndex((item) => {
      return item.pathname === activeKey
    })

    switch (eventName) {
      case 'close':
        closeTab(tabList.find((item) => item.pathname === activeKey))
        break
      case 'closeLeft':
        closeTabList(
          tabList.filter((_, index) => index < tabIndex),
          activeKey
        )
        break
      case 'closeRight':
        closeTabList(
          tabList.filter((_, index) => index > tabIndex),
          activeKey
        )
        break
      case 'closeOther':
        closeTabList(
          tabList.filter((_, index) => index !== tabIndex),
          activeKey
        )
        break
      case 'closeAll':
        closeTabList(tabList, activeKey)
        break
    }
  }

  return (
    <div className="nav-container px-3 box-border shadow-md bg-white flex items-center text-nowrap">
      <IContextMenuWrapper onClick={onClickMenu}>
        <Space ref={parent}>
          {tabList.map((t) => (
            <IContextMenuItem
              options={options}
              activeKey={t.pathname}
              key={t.pathname}
              onSetOptions={onSetOptions}
              className={
                'tab cursor-pointer flex items-center ' + (t.pathname === activeTab.pathname ? 'active-tab' : '')
              }>
              <span onClick={() => clickTab(t)}>{t.label}</span>
              <Close tab={t} />
            </IContextMenuItem>
          ))}
        </Space>
      </IContextMenuWrapper>
    </div>
  )
}

export default Navbar
