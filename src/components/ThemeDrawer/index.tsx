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
      <Drawer open={open} onClose={() => setOpen(false)} bodyStyle={{ padding: '0 16px' }}>
        <Divider>主题</Divider>
        <div className="flex items-center justify-between">
          <span className="font-bold">主题</span>
          <ColorPicker
            presets={presets}
            defaultValue={themeState.primaryColor}
            onChange={(_, hex) => {
              console.log(hex)
              dispatch(setTheme({ primaryColor: hex }))
            }}
          />
        </div>
      </Drawer>
    </>
  )
}

export default ThemeDrawer
