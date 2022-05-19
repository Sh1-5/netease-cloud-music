import React from 'react'

import Discover from '@/views/discover'
import My from '@/views/my'
import Friend from '@/views/friend'

const routes = [
  {
    path: '/',
    element: <Discover />
  },
  {
    path: '/my',
    element: <My />
  },
  {
    path: '/friend',
    element: <Friend />
  }
]

export default routes
