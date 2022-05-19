import React, { memo } from 'react'
import { NavLink, Outlet } from 'react-router-dom'

import { DiscoverWrapper, TopMenu } from './style'
import { discoverMenu } from '@/common/local-data'

const Discover = memo(() => {
  return (
    <DiscoverWrapper>
      <div className="top">
        <TopMenu className="wrap-v1">
          {discoverMenu.map((item) => {
            return (
              <div className="item" key={item.title}>
                <NavLink to={item.link}>{item.title}</NavLink>
              </div>
            )
          })}
        </TopMenu>
      </div>
      <Outlet />
    </DiscoverWrapper>
  )
})

Discover.displayName = 'Discover'

export default Discover
