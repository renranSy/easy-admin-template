import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.less'
import 'virtual:uno.css'
import { Provider } from 'react-redux'
import { store } from '@/store'

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement)
root.render(
  <Provider store={store}>
    <App />
  </Provider>
)
