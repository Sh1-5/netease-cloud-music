import React, { memo } from 'react'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'

import { getCurrentSongAction } from '../player-bar/store/actionCreators'

import { ThemeRankingWrapper } from './style'

import { getSizeImage } from '@/utils/format'

const ThemeRanking = memo((props) => {
  const { info } = props
  const { tracks = [] } = info

  const dispatch = useDispatch()

  const playMusic = (id) => {
    dispatch(getCurrentSongAction(id))
  }

  return (
    <ThemeRankingWrapper>
      <div className="header">
        <div className="image">
          <img src={getSizeImage(info.coverImgUrl)} alt="" />
          <a href="#" className="image_cover"></a>
        </div>
        <div className="info">
          <a href="#">{info.name}</a>
          <div>
            <button className="btn play sprite_02"></button>
            <button className="btn favor sprite_02"></button>
          </div>
        </div>
      </div>
      <div className="list">
        {tracks.slice(0, 10).map((item, index) => {
          return (
            <div className="list-item" key={item.id}>
              <div className="rank">{index + 1}</div>
              <div className="info">
                <span className="name text-nowrap">{item.name}</span>
                <div className="operate">
                  <div
                    className="btn sprite_02 play"
                    onClick={() => playMusic(item.id)}
                  ></div>
                  <div className="btn sprite_icon2 addto"></div>
                  <div className="btn sprite_02 favor"></div>
                </div>
              </div>
            </div>
          )
        })}
      </div>
      <div className="footer">
        <a href="#">查看全部</a>
      </div>
    </ThemeRankingWrapper>
  )
})

ThemeRanking.propTypes = {
  info: PropTypes.object.isRequired
}

ThemeRanking.displayName = 'ThemeRanking'

export default ThemeRanking
