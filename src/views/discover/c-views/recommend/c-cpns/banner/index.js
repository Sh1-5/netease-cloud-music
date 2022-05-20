import React, { memo, useEffect, useRef } from 'react'
import { useSelector, useDispatch, shallowEqual } from 'react-redux'

import { getBannerAction } from '../../store/actionCreators'

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { Carousel } from 'antd'

const Banner = memo(() => {
  const { banner } = useSelector((state) => {
    return {
      // banner: state.get('recommend').get('banner')
      banner: state.getIn(['recommend', 'banner'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  const bannerRef = useRef()
  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  return (
    <BannerWrapper>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel effect="fade" autoplay ref={bannerRef}>
            {banner.map((item) => {
              return (
                <div className="banner-item" key={item.imageUrl}>
                  <img
                    className="image"
                    src={item.imageUrl}
                    alt={item.typeTitle}
                  />
                </div>
              )
            })}
          </Carousel>
        </BannerLeft>
        <BannerRight></BannerRight>
        <BannerControl>
          <button
            className="btn left"
            onClick={() => bannerRef.current.prev()}
          ></button>
          <button
            className="btn right"
            onClick={() => bannerRef.current.next()}
          ></button>
        </BannerControl>
      </div>
    </BannerWrapper>
  )
})

Banner.displayName = 'Banner'

export default Banner
