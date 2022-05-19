import React, { memo, useEffect } from 'react'
import { useDispatch, useSelector, shallowEqual } from 'react-redux'

import { getBannerAction } from './store/actionCreators'

const Recommend = memo(() => {
  const { banner } = useSelector((state) => {
    return {
      banner: state.recommend.banner
    }
  }, shallowEqual)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getBannerAction())
  }, [dispatch])

  return <div>Recommend{banner.length}</div>
})

Recommend.displayName = 'Recommend'

export default Recommend
