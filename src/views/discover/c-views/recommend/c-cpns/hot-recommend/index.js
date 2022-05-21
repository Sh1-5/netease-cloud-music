import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import { HotRecommendWrapper } from './style'
import ThemeHeaderRecommend from '@/components/theme-header-recommend'
import { getHotRecommendAction } from '../../store/actionCreators'
import { HOT_RECOMMEND_LIMIT } from '@/common/constants'
import SongCover from '@/components/song-cover'

const HotRecommend = memo(() => {
  const { hotRecommend } = useSelector((state) => {
    return {
      hotRecommend: state.getIn(['recommend', 'hotRecommend'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getHotRecommendAction(HOT_RECOMMEND_LIMIT))
  }, [dispatch])

  return (
    <HotRecommendWrapper>
      <ThemeHeaderRecommend
        title="热门推荐"
        keywords={['华语', '流行', '民谣', '摇滚', '电子']}
      />
      <div className="recommend-list">
        {hotRecommend.map((item) => {
          return <SongCover key={item.id} info={item} />
        })}
      </div>
    </HotRecommendWrapper>
  )
})

HotRecommend.displayName = 'HotRecommend'

export default HotRecommend
