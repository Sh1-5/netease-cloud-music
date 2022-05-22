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
import UserLogin from './c-cpns/user-login'
import ResidentSinger from './c-cpns/resident-singer'
import HotAnchor from './c-cpns/hot-anchor'

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
        <RecommendRight>
          <UserLogin />
          <ResidentSinger />
          <HotAnchor />
        </RecommendRight>
      </Content>
    </RecommendWrapper>
  )
})

Recommend.displayName = 'Recommend'

export default Recommend
