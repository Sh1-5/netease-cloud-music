import React, { memo } from 'react'

import { RecommendWrapper } from './style'
import Banner from './c-cpns/banner'

const Recommend = memo(() => {
  return (
    <RecommendWrapper>
      <Banner />
    </RecommendWrapper>
  )
})

Recommend.displayName = 'Recommend'

export default Recommend
