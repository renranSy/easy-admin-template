import React from 'react'
import './index.less'
import { CloseOutlined } from '@ant-design/icons'
import { Tab, useTab } from '@/hooks/useTab'

export const Navbar = () => {
  const { activeTab, tabList, clickTab, closeTab } = useTab()

  const Close = (props: { tab: Tab }) => {
    if (props.tab.pathname === '/' && tabList.length === 1) {
      return <span className="pr-2"></span>
    }
    return (
      <CloseOutlined
        onClick={() => closeTab(props.tab)}
        className="pr-2 ml-1 cursor-pointer"
        style={{ fontSize: '10px' }}
      />
    )
  }

  return (
    <div className="nav-container px-3 box-border shadow-md bg-white flex items-center text-nowrap">
      {tabList.map((t) => (
        <div
          key={t.pathname}
          className={
            'tab mx-1 cursor-pointer flex items-center ' +
            (t.pathname === activeTab.pathname ? 'bg-blue-4 text-white' : 'tab-border')
          }>
          <span onClick={() => clickTab(t)} className="pl-2">
            {t.label}
          </span>
          <Close tab={t} />
        </div>
      ))}
    </div>
  )
}

export default Navbar
