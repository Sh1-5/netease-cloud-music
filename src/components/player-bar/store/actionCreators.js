import * as actionTypes from './constants'
import { getSongDetail } from '@/api/player-bar'

export const changeCurrentSongAction = (res) => {
  return {
    type: actionTypes.CHANGE_CURRENT_SONG,
    currentSong: res
  }
}
export const getCurrentSongAction = (ids) => {
  return async (dispatch, getState) => {
    // 1.查找playlist有没有这首歌曲
    const playList = getState().getIn(['playerBar', 'playList'])
    const index = playList.findIndex((song) => song.id === ids)
    // 2.判断是否找到歌曲
    if (index !== -1) {
      dispatch(changeCurrentIndexAction(index))
      const song = playList[index]
      dispatch(changeCurrentSongAction(song))
    } else {
      const res = await getSongDetail(ids)
      const song = res.songs && res.songs[0]
      if (!song) return
      // 1.添加到播放列表中
      dispatch(changePlayListAction([...playList, song]))
      // 2.更新currentIndex
      dispatch(changeCurrentIndexAction(playList.length))
      // 3.更新currentSong
      dispatch(changeCurrentSongAction(song))
    }
  }
}

export const changePlayListAction = (res) => {
  return {
    type: actionTypes.CHANGE_PLAY_LIST,
    playList: res
  }
}

// export const getPlayListAction = () => {
//   return (dispatch) => {}
// }

export const changeCurrentIndexAction = (res) => {
  return {
    type: actionTypes.CHANGE_CURRENT_INDEX,
    currentIndex: res
  }
}

// export const getCurrentIndexAction = () => {
//   return (dispatch) => {}
// }

// 修改播放顺序
export const changeSequenceAction = (sequence) => {
  return {
    type: actionTypes.CHANGE_SEQUENCE,
    sequence
  }
}

export const changeCurrentSongAndIndex = (isNext) => {
  return (dispatch, getState) => {
    const sequence = getState().getIn(['playerBar', 'sequence'])
    const currentIndex = getState().getIn(['playerBar', 'currentIndex'])
    const playList = getState().getIn(['playerBar', 'playList'])
    let nextIndex = isNext ? currentIndex + 1 : currentIndex - 1
    switch (sequence) {
      // 随机播放
      case 1:
        do {
          nextIndex = Math.floor(Math.random() * playList.length)
          console.log(nextIndex, 'nextIndex', currentIndex)
        } while (nextIndex === currentIndex)
        break
      // 顺序播放、单曲循环
      default:
        if (nextIndex > playList.length - 1) {
          nextIndex = 0
        }
        if (nextIndex < 0) {
          nextIndex = playList.length - 1
        }
    }
    dispatch(changeCurrentIndexAction(nextIndex))
    dispatch(changeCurrentSongAction(playList[nextIndex]))
  }
}
