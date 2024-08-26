import React from 'react'
import { useSelector } from 'react-redux'
import { RootState } from '@/store'
import Emitter from '@/utils/emitter'
import { getIcon } from '@/components/IContextMenuWrapper/icon'

const IContextMenu: React.FC = () => {
  const contextMenuState = useSelector((state: RootState) => state.contextMenu)

  return (
    <div
      className="position-fixed bg-white py-1 shadow-md rounded-md b-1 b-solid b-gray-2 transition-opacity"
      style={contextMenuState.style}>
      {contextMenuState.options.map((item) => (
        <div key={item.key}>
          <div
            onClick={(e) => {
              e.stopPropagation()
              if (item.disabled) {
                return
              }
              Emitter.emit('clickMenuItem', {
                activeKey: contextMenuState.activeKey,
                eventName: item.key
              })
            }}
            className={`mx-1 px-2 py-[6px] flex items-center rounded-sm transition-all transition-ease-in-out ${item.disabled ? 'cursor-default text-gray-4' : 'cursor-pointer hover:bg-[#f4f4f5] text-gray-7'}`}>
            <div className="flex items-center w-[20px]">{getIcon(item.icon)}</div>
            <div className="ms-1 text-sm">{item.name}</div>
          </div>
          {item.divider ? <div className="w-full h-[1px] bg-gray-2 my-1"></div> : null}
        </div>
      ))}
    </div>
  )
}

export default IContextMenu
