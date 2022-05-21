import React, { memo, useEffect, useRef } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { NewAlbumWrapper } from './style'
import ThemeHeaderRecommend from '@/components/theme-header-recommend'
import { getNewAlbumAction } from '../../store/actionCreators'
import { Carousel } from 'antd'
import AlbumCover from '@/components/album-cover'

const NewAlbum = memo(() => {
  const { newAlbum } = useSelector((state) => {
    return {
      newAlbum: state.getIn(['recommend', 'newAlbum']).slice(0, 10)
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  const pageRef = useRef()
  useEffect(() => {
    dispatch(getNewAlbumAction())
  }, [dispatch])

  return (
    <NewAlbumWrapper>
      <ThemeHeaderRecommend title="新碟上架" />
      <div className="content">
        <button
          className="arrow arrow-left sprite_02"
          onClick={() => pageRef.current.prev()}
        ></button>
        <div className="album">
          <Carousel dots={false} ref={pageRef}>
            {[0, 1].map((item) => {
              return (
                <div key={item} className="page">
                  {newAlbum.slice(item * 5, (item + 1) * 5).map((album) => {
                    return (
                      <AlbumCover
                        key={album.id}
                        info={album}
                        width={118}
                        size={100}
                        bgp="-570px"
                      >
                        {album.id}
                      </AlbumCover>
                    )
                  })}
                </div>
              )
            })}
          </Carousel>
        </div>
        <button
          className="arrow arrow-right sprite_02"
          onClick={() => pageRef.current.next()}
        ></button>
      </div>
    </NewAlbumWrapper>
  )
})

NewAlbum.displayName = 'NewAlbum'

export default NewAlbum
