import React from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'
import { Provider } from 'react-redux'

import routes from './router'
import store from './store'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

function AppMain() {
  const element = useRoutes(routes)
  return element
}

export default function App() {
  return (
    <Provider store={store}>
      <HashRouter>
        <AppHeader />
        <AppMain />
        <AppFooter />
      </HashRouter>
    </Provider>
  )
}
