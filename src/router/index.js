import React from 'react'
import { Navigate } from 'react-router-dom'

import Discover from '@/views/discover'
import Recommend from '@/views/discover/c-views/recommend'
import TopList from '@/views/discover/c-views/toplist'
import PlayList from '@/views/discover/c-views/playlist'
import DjRadio from '@/views/discover/c-views/djradio'
import Artist from '@/views/discover/c-views/artist'
import Album from '@/views/discover/c-views/album'
import My from '@/views/my'
import Friend from '@/views/friend'

const routes = [
  {
    path: '/',
    element: <Navigate to="discover" />
  },
  {
    path: 'discover/*',
    element: <Discover />,
    children: [
      {
        path: '',
        element: <Navigate to="recommend" />
      },
      {
        path: 'recommend',
        element: <Recommend />
      },
      {
        path: 'toplist',
        element: <TopList />
      },
      {
        path: 'playlist',
        element: <PlayList />
      },
      {
        path: 'djradio',
        element: <DjRadio />
      },
      {
        path: 'artist',
        element: <Artist />
      },
      {
        path: 'album',
        element: <Album />
      }
    ]
  },
  {
    path: 'my',
    element: <My />
  },
  {
    path: 'friend',
    element: <Friend />
  }
]

export default routes
