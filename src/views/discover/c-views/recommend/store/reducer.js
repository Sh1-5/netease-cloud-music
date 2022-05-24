import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultStore = Map({
  banner: [],
  hotRecommend: [],
  newAlbum: [],
  upRanking: {},
  newRanking: {},
  originRanking: {},
  hotArtist: []
})

function reducer(state = defaultStore, action) {
  switch (action.type) {
    case actionTypes.CHANGE_BANNER:
      return state.set('banner', action.banner)
    case actionTypes.CHANGE_HOT_RECOMMEND:
      return state.set('hotRecommend', action.hotRecommend)
    case actionTypes.CHANGE_NEW_ALBUM:
      return state.set('newAlbum', action.newAlbum)
    case actionTypes.CHANGE_UP_RANKING:
      return state.set('upRanking', action.upRanking)
    case actionTypes.CHANGE_NEW_RANKING:
      return state.set('newRanking', action.newRanking)
    case actionTypes.CHANGE_ORIGIN_RANKING:
      return state.set('originRanking', action.originRanking)
    case actionTypes.CHANGE_HOT_ARTIST:
      return state.set('hotArtist', action.hotArtist)
    default:
      return state
  }
}

export default reducer
