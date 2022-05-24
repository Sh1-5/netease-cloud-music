import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { getHotArtistAction } from '../../store/actionCreators'

import { ResidentSingerWrapper } from './style'

const ResidentSinger = memo(() => {
  const { hotArtist } = useSelector((state) => {
    return {
      hotArtist: state.getIn(['recommend', 'hotArtist'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotArtistAction(0, 5))
  }, [dispatch])
  return (
    <ResidentSingerWrapper>
      <h3 className="header">
        <span>入驻歌手</span>
        <a href="#">{'查看全部 >'}</a>
      </h3>
      <div className="main">
        {hotArtist.map((item) => {
          return (
            <a className="item" key={item.id} href="#">
              <div>
                <img className="pic" src={item.picUrl} alt="" />
              </div>
              <div className="info">
                <h3>
                  <span>{item.name}</span>
                </h3>
                <p>{item.briefDesc}</p>
              </div>
            </a>
          )
        })}
      </div>
      <div className="footer"></div>
    </ResidentSingerWrapper>
  )
})

ResidentSinger.displayName = 'ResidentSinger'

export default ResidentSinger
