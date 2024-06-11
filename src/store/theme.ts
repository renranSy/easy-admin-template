import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type ThemeState = {
  primaryColor: string
}

const initialState = {
  primaryColor: '#4784ff'
} as ThemeState

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeState>) {
      state.primaryColor = action.payload.primaryColor

      const root = document.querySelector<HTMLElement>(':root')
      root?.style.setProperty('--primary-color', state.primaryColor)
    }
  }
})

export const { setTheme } = themeSlice.actions
export default themeSlice.reducer
