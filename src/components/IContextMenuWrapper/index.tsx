import React, { CSSProperties, ReactNode, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { hideContextMenu } from '@/store/contextMenu'
import Emitter, { EmitClickMenuItem } from '@/utils/emitter'

type Props = {
  children: ReactNode
  style?: CSSProperties
  className?: string
  onClick?: (eventName: string, activeKey: string) => void
}

const IContextMenuWrapper: React.FC<Props> = (props) => {
  useEffect(() => {
    const handler = () => {
      dispatch(hideContextMenu())
    }
    document.addEventListener('click', handler)
    return () => {
      document.removeEventListener('click', handler)
    }
  }, [])

  useEffect(() => {
    const handler = (message: EmitClickMenuItem) => {
      dispatch(hideContextMenu())
      props.onClick?.(message.eventName, message.activeKey)
    }
    Emitter.on('clickMenuItem', handler)
    return () => {
      Emitter.off('clickMenuItem', handler)
    }
  }, [props])

  const dispatch = useDispatch()

  return (
    <div style={props.style} className={props.className}>
      {props.children}
    </div>
  )
}

export default IContextMenuWrapper
