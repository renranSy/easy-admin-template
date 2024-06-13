import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { hexToRgba } from '@/utils/color'

export type ThemeState = {
  primaryColor: string
  successColor: string
  errorColor: string
  warningColor: string
  titleColor: string
  subtitleColor: string
  secondaryColor: string
  placeholderColor: string
  dividerDarkColor: string
  dividerLightColor: string
  backgroundColor: string
}

export const ThemeStyleMap = new Map<string, string>([
  ['primaryColor', '--primary-color'],
  ['successColor', '--success-color'],
  ['errorColor', '--error-color'],
  ['warningColor', '--warning-color'],
  ['titleColor', '--title-color'],
  ['subtitleColor', '--subtitle-color'],
  ['secondaryColor', '--secondary-color'],
  ['placeholderColor', '--placeholder-color'],
  ['dividerDarkColor', '--divider-dark-color'],
  ['dividerLightColor', '--divider-light-color'],
  ['backgroundColor', '--background-color']
])

const initialState = {
  primaryColor: '#4787FF',
  successColor: '#14CB3C',
  errorColor: '#F55A47',
  warningColor: '#FF8A00',
  titleColor: '#333333',
  subtitleColor: '#4b5563',
  secondaryColor: '#9ca3af',
  placeholderColor: '#9EA9B8',
  dividerDarkColor: '#CCD3DB',
  dividerLightColor: '#E3E9F0',
  backgroundColor: '#F5F7FA'
} as ThemeState

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeState>) {
      for (const key in state) {
        state[key as keyof typeof state] = action.payload[key as keyof typeof state]
      }

      const root = document.querySelector<HTMLElement>(':root')
      if (!root) {
        return
      }
      for (const key in state) {
        root.style.setProperty(ThemeStyleMap.get(key) || '', state[key as keyof ThemeState])
      }
      root.style.setProperty('--selection-color', hexToRgba(state.primaryColor, 0.2))
    },
    initTheme(state) {
      const root = document.querySelector<HTMLElement>(':root')
      console.log(root)
      if (!root) {
        return
      }
      for (const key in state) {
        root.style.setProperty(ThemeStyleMap.get(key) || '', state[key as keyof ThemeState])
      }
      root.style.setProperty('--selection-color', hexToRgba(state.primaryColor, 0.2))
    }
  }
})

export const { setTheme, initTheme } = themeSlice.actions
export default themeSlice.reducer
