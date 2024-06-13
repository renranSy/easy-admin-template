import React from 'react'
import './index.less'
import { CloseOutlined } from '@ant-design/icons'
import { Tab, useTab } from '@/hooks/useTab'
import { useAutoAnimate } from '@formkit/auto-animate/react'
import { Space } from 'antd'

export const Navbar = () => {
  const { activeTab, tabList, clickTab, closeTab } = useTab()
  const [parent] = useAutoAnimate()

  const Close = (props: { tab: Tab }) => {
    if (props.tab.pathname === '/' && tabList.length === 1) {
      return <span className="pr-2"></span>
    }
    return (
      <CloseOutlined onClick={() => closeTab(props.tab)} className="ml-1 cursor-pointer" style={{ fontSize: '10px' }} />
    )
  }

  return (
    <div className="nav-container px-3 box-border shadow-md bg-white flex items-center text-nowrap">
      <Space ref={parent}>
        {tabList.map((t) => (
          <div
            key={t.pathname}
            className={
              'tab cursor-pointer flex items-center ' +
              (t.pathname === activeTab.pathname ? 'active-tab' : '')
            }>
            <span onClick={() => clickTab(t)}>{t.label}</span>
            <Close tab={t} />
          </div>
        ))}
      </Space>
    </div>
  )
}

export default Navbar
