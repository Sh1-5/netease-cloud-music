import React, { memo } from 'react'
import { NavLink } from 'react-router-dom'

import { HeaderWrapper, HeaderLeft, HeaderRight } from './style'
import { headerLinks } from '@/common/local-data'

const AppHeader = memo(() => {
  const showSelectItem = (item, index) => {
    if (index < 3) {
      return <NavLink to={item.link}>{item.title}</NavLink>
    } else {
      return (
        <a href={item.link} target="_blank" rel="noreferrer">
          {item.title}
        </a>
      )
    }
  }
  return (
    <HeaderWrapper>
      <div className="content wrap-v1">
        <HeaderLeft>
          <a href="#" className="logo sprite_01"></a>
          <div className="select-list">
            {headerLinks.map((item, index) => {
              return (
                <div className="select-item" key={item.title}>
                  {showSelectItem(item, index)}
                </div>
              )
            })}
          </div>
        </HeaderLeft>
        <HeaderRight></HeaderRight>
      </div>
      <div className="divider"></div>
    </HeaderWrapper>
  )
})

AppHeader.displayName = 'AppHeader'

export default AppHeader
