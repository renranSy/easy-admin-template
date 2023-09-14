import React from 'react'
import './index.less'
import { CloseOutlined } from '@ant-design/icons'
import { useTab } from '@/hooks/useTab'

export const Navbar = () => {
  const { activeTab, tabList, clickTab, closeTab } = useTab()
  return (
    <div className="nav-container px-3 box-border shadow-md bg-white flex items-center text-nowrap">
      {/*<div*/}
      {/*  className="px-2 mx-1 cursor-pointer flex items-center bg-green-3 text-white"*/}
      {/*  style={{ fontSize: '14px', height: '24px' }}>*/}
      {/*  <span>主页</span>*/}
      {/*  <CloseOutlined className="ml-1 cursor-pointer" style={{ fontSize: '12px' }} />*/}
      {/*</div>*/}
      {tabList.map((t) => (
        <div
          key={t.pathname}
          // className="px-2 mx-1 cursor-pointer flex items-center b b-solid b-gray-4"
          className={
            'tab mx-1 cursor-pointer flex items-center ' +
            (t.pathname === activeTab.pathname ? 'bg-green-3 text-white' : 'tab-border')
          }>
          <span onClick={() => clickTab(t)} className="pl-2">
            {t.label}
          </span>
          <CloseOutlined
            onClick={() => closeTab(t)}
            className="pr-2 ml-1 cursor-pointer"
            style={{ fontSize: '10px' }}
          />
        </div>
      ))}
    </div>
  )
}

export default Navbar
