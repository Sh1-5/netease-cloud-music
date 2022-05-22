import * as actionTypes from './constants'
import { getSongDetail } from '@/api/player-bar'

export const changeCurrentSong = (res) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: res
  }
}
export const getCurrentSongAction = (ids) => {
  return async (dispatch) => {
    const res = await getSongDetail(ids)
    dispatch(changeCurrentSong(res.songs[0]))
  }
}
