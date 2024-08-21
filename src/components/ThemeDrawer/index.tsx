import React from 'react'
import { ColorPicker, ColorPickerProps, Divider, Drawer } from 'antd'
import { generate, green, presetPalettes, red } from '@ant-design/colors'

import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '@/store'
import { setTheme } from '@/store/theme'

type Props = {
  open: boolean
  setOpen: (value: boolean) => void
}

type Presets = Required<ColorPickerProps>['presets'][number]

const genPresets = (presets = presetPalettes) =>
  Object.entries(presets).map<Presets>(([label, colors]) => ({ label, colors }))

const ThemeDrawer: React.FC<Props> = ({ open, setOpen }) => {
  const themeState = useSelector((state: RootState) => state.theme)
  const dispatch = useDispatch()

  const presets = genPresets({ primary: generate(themeState.primaryColor), red, green })

  return (
    <>
      <Drawer open={open} onClose={() => setOpen(false)} styles={{ body: { padding: '0 16px' } }}>
        <Divider>主题</Divider>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">主题</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.primaryColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, primaryColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">成功</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.successColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, successColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">错误</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.errorColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, errorColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">警告</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.warningColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, warningColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">标题</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.titleColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, titleColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">副标题</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.subtitleColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, subtitleColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">次标题</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.secondaryColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, secondaryColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">占位符</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.placeholderColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, placeholderColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">深分隔符</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.dividerDarkColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, dividerDarkColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">浅分隔符</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.dividerLightColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, dividerLightColor: hex }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">背景</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.backgroundColor}
            onChange={(_, hex) => {
              dispatch(setTheme({ ...themeState, backgroundColor: hex }))
            }}
          />
        </div>
      </Drawer>
    </>
  )
}

export default ThemeDrawer
