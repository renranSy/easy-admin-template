import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { CSSProperties } from 'react'
import { IContextMenuOption } from '@/components/IContextMenuWrapper/IContextMenuItem'

export type ContextMenuState = {
  style: CSSProperties
  options: IContextMenuOption[]
  activeKey: string
}

const initialState = {
  style: {
    top: 100,
    left: 100,
    zIndex: 999,
    opacity: 1
  },
  options: [],
  activeKey: ''
} as ContextMenuState

type ShowPayload = {
  top: number
  left: number
  options: IContextMenuOption[]
}

export const contextMenuSlice = createSlice({
  name: 'contextMenu',
  initialState,
  reducers: {
    showContextMenu: (state, action: PayloadAction<ShowPayload>) => {
      state.style.top = action.payload.top
      state.style.left = action.payload.left
      state.style.zIndex = 999
      state.style.opacity = 1
      state.options = action.payload.options
    },
    hideContextMenu: (state) => {
      state.style = {
        opacity: 0
      }
    },
    setContextMenuActiveKey: (state, action: PayloadAction<string>) => {
      state.activeKey = action.payload
    }
  }
})

export const { showContextMenu, hideContextMenu, setContextMenuActiveKey } = contextMenuSlice.actions
export default contextMenuSlice.reducer
