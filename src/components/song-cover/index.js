import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { SongCoverWrapper } from './style'
import { getCount } from '@/utils/format'

const SongCover = memo((props) => {
  const { info } = props

  return (
    <SongCoverWrapper>
      <div className="cover-top">
        <img src={info.picUrl} alt="" />
        <div className="cover sprite_cover">
          <div className="info sprite_cover">
            <span>
              <i className="sprite_icon erji"></i>
              {getCount(info.playCount)}
            </span>
            <i className="sprite_icon play"></i>
          </div>
        </div>
      </div>
      <div className="cover-bottom text-nowrap">{info.name}</div>
      <div className="cover-source">by {info.copywriter}</div>
    </SongCoverWrapper>
  )
})

SongCover.propTypes = {
  info: PropTypes.object.isRequired
}

SongCover.displayName = 'SongCover'

export default SongCover
