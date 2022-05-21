import React, { memo } from 'react'
import PropTypes from 'prop-types'

import { AlbumCoverWrapper } from './style'
import { getSizeImage } from '@/utils/format'

const AlbumCover = memo((props) => {
  const { info, width = 150, size = 130, bgp = '-845px' } = props

  return (
    <AlbumCoverWrapper width={width} size={size} bgp={bgp}>
      <div className="album-image">
        <img src={getSizeImage(info.picUrl)} alt="" />
        <a href="#" className="cover image_cover">
          {info.name}
        </a>
      </div>
      <div className="album-info">
        <div className="name">{info.name}</div>
        <div className="artist">{info.artist.name}</div>
      </div>
    </AlbumCoverWrapper>
  )
})

AlbumCover.propTypes = {
  info: PropTypes.object.isRequired,
  width: PropTypes.number,
  size: PropTypes.number,
  bgp: PropTypes.string
}

AlbumCover.displayName = 'AlbumCover'

export default AlbumCover
