import * as actionTypes from './constants'
import {
  getBanner,
  getHotRecommend,
  getNewAlbum,
  getPlayListDetail,
  getHotArtist
} from '@/api/recommend'
import { NEW_RANKING_ID, ORIGIN_RANKING_ID } from '@/common/constants'

// 轮播图
const changeBannerAction = (res) => {
  return {
    type: actionTypes.CHANGE_BANNER,
    banner: res
  }
}

export const getBannerAction = (type) => {
  return async (dispatch) => {
    const res = await getBanner(type)
    dispatch(changeBannerAction(res.banners))
  }
}

// 热门推荐
const changeHotRecommendAction = (res) => {
  return {
    type: actionTypes.CHANGE_HOT_RECOMMEND,
    hotRecommend: res
  }
}

export const getHotRecommendAction = (limit) => {
  return async (dispatch) => {
    const res = await getHotRecommend(limit)
    dispatch(changeHotRecommendAction(res.result))
  }
}

// 新碟上架
export const changeNewAlbumAction = (res) => {
  return {
    type: actionTypes.CHANGE_NEW_ALBUM,
    newAlbum: res
  }
}

export const getNewAlbumAction = () => {
  return async (dispatch) => {
    const res = await getNewAlbum({
      limit: 10,
      offset: 0,
      area: 'ALL',
      type: 'new',
      year: new Date().getFullYear(),
      month: new Date().getMonth() + 1
    })
    dispatch(changeNewAlbumAction(res.monthData))
  }
}

// 榜单
export const changeUpRankingAction = (res) => {
  return {
    type: actionTypes.CHANGE_UP_RANKING,
    upRanking: res
  }
}

export const changeNewRankingAction = (res) => {
  return {
    type: actionTypes.CHANGE_NEW_RANKING,
    newRanking: res
  }
}

export const changeOriginRankingAction = (res) => {
  return {
    type: actionTypes.CHANGE_ORIGIN_RANKING,
    originRanking: res
  }
}

export const getRankingAction = (id) => {
  return async (dispatch) => {
    const res = await getPlayListDetail(id)
    switch (id) {
      case NEW_RANKING_ID:
        dispatch(changeNewRankingAction(res.playlist))
        break
      case ORIGIN_RANKING_ID:
        dispatch(changeOriginRankingAction(res.playlist))
        break
      default:
        dispatch(changeUpRankingAction(res.playlist))
    }
  }
}

// 入驻歌手
export const changeHotArtistAction = (res) => {
  return {
    type: actionTypes.CHANGE_HOT_ARTIST,
    hotArtist: res
  }
}

export const getHotArtistAction = (offset, limit) => {
  return async (dispatch) => {
    const res = await getHotArtist(offset, limit)
    dispatch(changeHotArtistAction(res.artists))
  }
}
