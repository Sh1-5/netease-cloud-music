import React from 'react'
import { createRoot } from 'react-dom/client'

import App from './App'

import '@/assets/css/reset.css'

import 'antd/dist/antd.min.css'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

createRoot(document.getElementById('root')).render(
  <ConfigProvider locale={zhCN}>
    <App />
  </ConfigProvider>
)
