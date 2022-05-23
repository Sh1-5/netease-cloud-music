import { Map } from 'immutable'

import * as actionTypes from './constants'

const defaultState = Map({
  currentSong: {},
  playList: [],
  currentIndex: 0,
  sequence: 0 // 0：顺序播放，1：随机播放，2：单曲循环
})

function reducer(state = defaultState, action) {
  switch (action.type) {
    case actionTypes.CHANGE_CURRENT_SONG:
      return state.set('currentSong', action.currentSong)
    case actionTypes.CHANGE_PLAY_LIST:
      return state.set('playList', action.playList)
    case actionTypes.CHANGE_CURRENT_INDEX:
      return state.set('currentIndex', action.currentIndex)
    case actionTypes.CHANGE_SEQUENCE:
      return state.set('sequence', action.sequence)
    default:
      return state
  }
}

export default reducer
