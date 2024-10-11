import React, { useEffect, useRef, useState } from 'react'
import { IconChevronRight } from '@tabler/icons-react'

type IDropdownItem = {
  key: string
  label: string
  icon: React.ReactNode
  onClick?: () => void
  child?: IDropdownItem[]
}

type Props = {
  children: React.ReactNode
  items?: IDropdownItem[]
}

const IDropdown: React.FC<Props> = ({ children, items }) => {
  const listRef = useRef<HTMLDivElement>(null)
  const childRef = useRef<HTMLDivElement>(null)
  const [open, setOpen] = useState(false)

  const [childList, setChildList] = useState<IDropdownItem[]>([])

  useEffect(() => {
    document.addEventListener('click', hide)
    return () => {
      document.removeEventListener('click', hide)
    }
  }, [])

  const show = () => {
    if (!listRef.current) {
      return
    }
    listRef.current.style.display = 'block'
    setTimeout(() => {
      if (!listRef.current) {
        return
      }
      listRef.current.style.opacity = '1'
    })
    setOpen(true)
  }

  const hide = () => {
    if (!listRef.current) {
      return
    }

    listRef.current.style.opacity = '0'
    setTimeout(() => {
      if (!listRef.current) {
        return
      }
      listRef.current.style.display = 'none'
    }, 150)
    setOpen(false)
  }

  const showChild = (child: IDropdownItem[], index: number) => {
    setChildList(() => child)
    if (!childRef.current) {
      return
    }
    setTimeout(() => {
      if (!childRef.current) {
        return
      }
      childRef.current.style.display = 'block'
      childRef.current.style.top = `${2.4 * index}rem`
    })
    childRef.current.style.opacity = '1'
  }

  const clickNode = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation()
    open ? hide() : show()
  }

  return (
    <div className="pos-relative">
      <div onClick={clickNode}>{children}</div>
      <div ref={listRef} className="pos-absolute z-2 opacity-[0] hidden">
        <div
          className="flex items-start
        ">
          <div className="rounded-md b b-solid b-gray-1 bg-white p-1 shadow-md transition z-[2]">
            {items?.map((item, index) => (
              <div
                onMouseEnter={() => {
                  showChild(item.child || [], index)
                }}
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between px-2 h-[2.4rem] text-nowrap text-[#818ea3] transition cursor-pointer rounded-md hover:bg-gray-1 hover:text-[#18181b] hover:stroke-[#18181b] transition"
                key={item.key}>
                <div className="flex items-center">
                  {item.icon}
                  <div className="ms-2 ">{item.label}</div>
                </div>
                {item.child?.length === 0 ? null : <IconChevronRight className="ms-4" size={20} />}
              </div>
            ))}
          </div>
          <div
            ref={childRef}
            className="hide pos-relative rounded-md b b-solid b-gray-1 bg-white p-1 shadow-md transition-opacity z-[2]">
            {childList.map((item) => (
              <div
                onClick={(e) => e.stopPropagation()}
                className="flex items-center justify-between px-2 h-[2.4rem] text-nowrap text-[#818ea3] cursor-pointer rounded-md hover:bg-gray-1 hover:text-[#18181b] hover:stroke-[#18181b]"
                key={item.key}>
                <div className="flex items-center">
                  {item.icon}
                  <div className="ms-2 ">{item.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default IDropdown
