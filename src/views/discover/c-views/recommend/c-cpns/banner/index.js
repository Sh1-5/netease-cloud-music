import React, { memo, useCallback, useEffect, useRef, useState } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { BannerWrapper, BannerLeft, BannerRight, BannerControl } from './style'
import { getBannerAction } from '../../store/actionCreators'
import { Carousel } from 'antd'

const Banner = memo(() => {
  // 记录当前banner
  const [currentIndex, setCurrentIndex] = useState(0)

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
  const bannerChange = useCallback((from, to) => {
    setCurrentIndex(to)
  }, [])

  const bgImage =
    banner[currentIndex] &&
    banner[currentIndex].imageUrl + '?imageView&blur=40x20'

  return (
    <BannerWrapper bgImage={bgImage}>
      <div className="banner wrap-v2">
        <BannerLeft>
          <Carousel
            effect="fade"
            autoplay
            ref={bannerRef}
            beforeChange={bannerChange}
          >
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
