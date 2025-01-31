import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.less'
import 'virtual:uno.css'
import { Provider } from 'react-redux'
import { store } from '@/store'
import { I18nextProvider } from 'react-i18next'
import i18n from '@/locales/index'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <I18nextProvider i18n={i18n}>
    <Provider store={store}>
      <App />
    </Provider>
  </I18nextProvider>
)
