import React, { memo } from 'react'

import { SongWrapper, SongLeft, SongRight } from './style'

const Song = memo(() => {
  return (
    <SongWrapper>
      <div className="content wrap-v2">
        <SongLeft></SongLeft>
        <SongRight></SongRight>
      </div>
    </SongWrapper>
  )
})

Song.displayName = 'Song'

export default Song
