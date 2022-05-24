import React, { memo } from 'react'

import { HotAnchorWrapper } from './style'

const HotAnchor = memo(() => {
  return (
    <HotAnchorWrapper>
      <h3 className="header">
        <span>热门主播</span>
      </h3>
    </HotAnchorWrapper>
  )
})

HotAnchor.displayName = 'HotAnchor'

export default HotAnchor
