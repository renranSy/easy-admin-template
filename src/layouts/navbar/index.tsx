import React from 'react'
import './index.less'
import { DefaultTab, Tab, useTab } from '@/hooks/useTab'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Space } from 'antd'
import { IconX } from '@tabler/icons-react'
import IContextMenuWrapper from '../../components/IContextMenuWrapper'
import IContextMenuItem, { IContextMenuOption } from '@/components/IContextMenuWrapper/IContextMenuItem'
import useI18n from '@/hooks/useI18n'

export const Navbar = () => {
  const { t } = useI18n()
  const { activeTab, tabList, clickTab, closeTab, closeTabList } = useTab()
  const [parent] = useAutoAnimate()

  const options: IContextMenuOption[] = [
    {
      key: 'close',
      name: t('tabContextMenu.close'),
      icon: 'x',
      divider: true
    },
    {
      key: 'closeLeft',
      name: t('tabContextMenu.closeLeft'),
      icon: 'arrowBarToLeft'
    },
    {
      key: 'closeRight',
      name: t('tabContextMenu.closeRight'),
      icon: 'arrowBarToRight',
      divider: true
    },
    {
      key: 'closeOther',
      name: t('tabContextMenu.closeOther'),
      icon: 'arrowBarBoth'
    },
    {
      key: 'closeAll',
      name: t('tabContextMenu.closeAll'),
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
          {tabList.map((tab) => (
            <IContextMenuItem
              options={options}
              activeKey={tab.pathname}
              key={tab.pathname}
              onSetOptions={onSetOptions}
              className={
                'tab cursor-pointer flex items-center ' + (tab.pathname === activeTab.pathname ? 'active-tab' : '')
              }>
              <span onClick={() => clickTab(tab)}>{t(tab.label)}</span>
              <Close tab={tab} />
            </IContextMenuItem>
          ))}
        </Space>
      </IContextMenuWrapper>
    </div>
  )
}

export default Navbar
