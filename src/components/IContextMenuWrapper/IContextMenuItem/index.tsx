import React, { CSSProperties, ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideContextMenu, setContextMenuActiveKey, showContextMenu } from '@/store/contextMenu'

export type IContextMenuOption = {
  key: string
  name: string
  icon?: string
  disabled?: boolean
  divider?: boolean
  children?: IContextMenuOption[]
}

type Props = {
  activeKey: string
  options: IContextMenuOption[]
  children: ReactNode
  style?: CSSProperties
  className?: string
  onSetOptions?: (activeKey: string) => IContextMenuOption[]
}

const IContextMenuItem: React.FC<Props> = (props) => {
  const dispatch = useDispatch()

  useEffect(() => {
    const handler = () => {
      dispatch(hideContextMenu())
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  const handler = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault()
    dispatch(hideContextMenu())

    setTimeout(() => {
      dispatch(
        showContextMenu({
          left: e.clientX,
          top: e.clientY,
          options: props.onSetOptions
            ? props.onSetOptions(props.activeKey)
            : props.options.map((item) => ({
                ...item,
                disabled: item.disabled ?? true,
                divider: item.divider ?? false
              }))
        })
      )
    }, 100)
  }

  return (
    <div
      style={props.style}
      className={props.className}
      onContextMenu={(e) => {
        dispatch(setContextMenuActiveKey(props.activeKey))
        handler(e)
      }}>
      {props.children}
    </div>
  )
}

export default IContextMenuItem
