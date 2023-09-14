import React from 'react'

const Header = () => {
  return (
    <>
      <div
        className="flex items-center justify-between bg-white shadow-sm px-7 w-full"
        style={{ height: '70px', borderBottom: '1px solid #e4e4e4', position: 'relative', zIndex: '999' }}>
        <div className="flex items-center">
          <img style={{ width: '36px', height: '36px' }} src="/logo.svg" alt="" />
          <div className="font-bold ml-3" style={{ fontSize: 20 }}>
            Easy Admin
          </div>
        </div>
      </div>
    </>
  )
}

export default Header
