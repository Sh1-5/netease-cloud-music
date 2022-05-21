import React, { memo, useEffect } from 'react'
import { useSelector, shallowEqual, useDispatch } from 'react-redux'

import ThemeHeaderRecommend from '@/components/theme-header-recommend'
import { RankingWrapper } from './style'
import { getRankingAction } from '../../store/actionCreators'
import {
  UP_RANKING_ID,
  NEW_RANKING_ID,
  ORIGIN_RANKING_ID
} from '@/common/constants'
import ThemeRanking from '@/components/theme-ranking'

const Ranking = memo(() => {
  const { upRanking, newRanking, originRanking } = useSelector((state) => {
    return {
      upRanking: state.getIn(['recommend', 'upRanking']),
      newRanking: state.getIn(['recommend', 'newRanking']),
      originRanking: state.getIn(['recommend', 'originRanking'])
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getRankingAction(UP_RANKING_ID))
    dispatch(getRankingAction(NEW_RANKING_ID))
    dispatch(getRankingAction(ORIGIN_RANKING_ID))
  }, [dispatch])

  return (
    <RankingWrapper>
      <ThemeHeaderRecommend title="榜单" />
      <div className="tops">
        <ThemeRanking info={upRanking} />
        <ThemeRanking info={newRanking} />
        <ThemeRanking info={originRanking} />
      </div>
    </RankingWrapper>
  )
})

Ranking.displayName = 'Ranking'

export default Ranking
