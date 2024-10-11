// uno.config.ts
import { defineConfig, presetTypography, presetUno } from 'unocss'
import transformerDirectives from '@unocss/transformer-directives'

export default defineConfig({
  transformers: [transformerDirectives()],
  presets: [
    presetUno(),
    presetTypography({
      cssExtend: {
        blockquote: {
          'font-style': 'normal',
          color: '#777777'
        },
        'li::marker': {
          color: '#3881da'
        },
        code: {
          padding: '0.2rem 0.4rem',
          'border-radius': '0.3rem',
          'background-color': '#eff1f3!important',
          'font-weight': 'normal',
          color: '#2e3436'
        },
        'code::before': {
          content: "''!important"
        },
        'code::after': {
          content: "''!important"
        },
        pre: {
          'background-color': '#f8fafc!important',
          border: '1px solid #f6f8fa',
          'border-radius': '0.375rem',
          padding: '0.5rem'
        },
        'pre>code': {
          'background-color': '#f8fafc!important'
        },
        '.selectedCell': {
          background: '#dde7ff'
        }
      }
    })
  ]
})
