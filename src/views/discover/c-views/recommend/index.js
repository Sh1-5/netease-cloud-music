import React, { memo } from 'react'

import {
  RecommendWrapper,
  Content,
  RecommendLeft,
  RecommendRight
} from './style'
import Banner from './c-cpns/banner'
import HotRecommend from './c-cpns/hot-recommend'
import NewAlbum from './c-cpns/new-album'
import Ranking from './c-cpns/ranking'

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <Banner />
      <Content className="wrap-v2">
        <RecommendLeft>
          <HotRecommend />
          <NewAlbum />
          <Ranking />
        </RecommendLeft>
        <RecommendRight></RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

Recommend.displayName = 'Recommend'

export default Recommend
