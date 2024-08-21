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
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, primaryColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">成功</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.successColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, successColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">错误</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.errorColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, errorColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">警告</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.warningColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, warningColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">标题</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.titleColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, titleColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">副标题</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.subtitleColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, subtitleColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">次标题</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.secondaryColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, secondaryColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">占位符</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.placeholderColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, placeholderColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">深分隔符</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.dividerDarkColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, dividerDarkColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">浅分隔符</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.dividerLightColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, dividerLightColor: value.toHexString() }))
            }}
          />
        </div>
        <div className="flex items-center justify-between mb-2">
          <span className="font-bold">背景</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.backgroundColor}
            onChange={(value) => {
              dispatch(setTheme({ ...themeState, backgroundColor: value.toHexString() }))
            }}
          />
        </div>
      </Drawer>
    </>
  )
}

export default ThemeDrawer
