import * as actionTypes from './constants'
import { getBanner } from '@/api/recommend'

const changeBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_BANNER,
    banner: res
  }
}

export const getBannerAction = () => {
  return (dispatch) => {
    getBanner().then((res) => {
      dispatch(changeBannerAction(res.banners))
    })
  }
}
