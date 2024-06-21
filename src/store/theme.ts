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

// 定义颜色与 CSS 变量映射关系
export const ThemeStyleMap = new Map<keyof ThemeState, string>([
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

const initialState: ThemeState = {
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
}

// 将主题应用到根元素的函数
const applyThemeToRoot = (theme: ThemeState) => {
  const root = document.querySelector<HTMLElement>(':root')
  if (!root) {
    return
  }
  ThemeStyleMap.forEach((cssVar, key) => {
    root.style.setProperty(cssVar, theme[key])
  })
  root.style.setProperty('--selection-color', hexToRgba(theme.primaryColor, 0.2))
}

export const themeSlice = createSlice({
  name: 'theme',
  initialState,
  reducers: {
    setTheme(state, action: PayloadAction<ThemeState>) {
      Object.assign(state, action.payload)
      applyThemeToRoot(action.payload)
    },
    initTheme(state) {
      applyThemeToRoot(state)
    }
  }
})

export const { setTheme, initTheme } = themeSlice.actions
export default themeSlice.reducer
