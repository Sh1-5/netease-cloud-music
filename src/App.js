import React from 'react'
import { HashRouter, useRoutes } from 'react-router-dom'

import routes from './router'

import AppHeader from '@/components/app-header'
import AppFooter from '@/components/app-footer'

function AppMain() {
  const element = useRoutes(routes)
  return element
}

export default function App() {
  return (
    <HashRouter>
      <AppHeader />
      <AppMain />
      <AppFooter />
    </HashRouter>
  )
}
